import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schemas';
import * as bcrypt from 'bcrypt';
import nodemailer = require("nodemailer");
import { UserStatus } from './enum/user-status.enum';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findAll(): Promise<User[] | undefined> {
        return this.userModel.find();
    }

    async findOne(username: string): Promise<User | undefined> {
        let user = await this.userModel.findOne({ username });
        return user;
    }

    async register(createUserDto: CreateUserDto): Promise<User> {
        await this.checkUniqueBeforeRegister(createUserDto.email, createUserDto.username)
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length)];
        }
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDto.password, saltOrRounds)
        const user = new this.userModel({ ...createUserDto, confirmationCode: token, fullName: `${createUserDto.firstName} ${createUserDto.lastName}`, password: hash });
        this.sendEmailRegister(user.fullName, user.email, user.confirmationCode)
        return user.save();
    }

    async checkUniqueBeforeRegister(email: string, username: string) {
        let userEmail = await this.userModel.findOne({ email });
        if (userEmail) {
            throw new HttpException("Email đã tồn tại", 201)
        } else {
            let userUsername = await this.userModel.findOne({ username });
            if (userUsername) {
                throw new HttpException("Username đã tồn tại", 201)
            }
        }
    }

    async sendEmailRegister(name: string, email: string, confirmationCode: string) {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'zenominhhoang@gmail.com',
                pass: 'Dalecarnegie521985',
            }
        })
        transport.sendMail({
            from: 'zenominhhoang@gmail.com',
            to: email,
            subject: "Vui lòng xác nhận tài khoản của bạn",
            html: `<h1>Email xác nhận</h1>
                <h2>Xin chào ${name}</h2>
                <p>Cảm ơn bạn đã đăng ký. Vui lòng xác nhận tài khoản bằng cách nhấn vào đường link dưới đây</p>
                <a href=http://localhost:3002/verify-email/${confirmationCode}>Link</a>
                </div>`,
        }).catch(err => console.log(err));
    }

    async verifyUser(confirmationCode: string) {
        let user = await this.userModel.findOne({ confirmationCode });

        if (user) {
            if (user.status == UserStatus.Active) {
                throw new HttpException('Not page found', 201)
            } else if (user.status == UserStatus.Pending) {
                user.status = UserStatus.Active;
                return user.save();
            }
        } else {
            throw new HttpException('Not page found', 201)
        }

    }

    async changePassword(oldPassword: string, newPassword: string, email: string) {
        let user = await this.userModel.findOne({ email });
        const isMatchPassword = await bcrypt.compare(oldPassword, user.password);
        if (isMatchPassword) {
            const isMatch = await bcrypt.compare(newPassword, user.password)
            if (isMatch) {
                throw new HttpException("Mật khẩu mới không được trùng với mật khẩu cũ", 201)
            } else {
                const saltOrRounds = 10;
                const hash = await bcrypt.hash(newPassword, saltOrRounds);
                user.password = hash;
                user.save();
                throw new HttpException("Thay đổi mật khẩu thành công", 200)
            }
        }else{
            throw new HttpException("Mật khẩu cũ chưa đúng!", 201)
        }
    }

    async forgotPassword(email: string) {
        let user = await this.userModel.findOne({ email });
        if (user) {
            this.sendEmailForgotPassword(user.fullName, user.email, user.confirmationCode);
            return user;
        } else {
            throw new HttpException('Email không tồn tại', 201)
        }
    }

    async sendEmailForgotPassword(name: string, email: string, confirmationCode: string) {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'zenominhhoang@gmail.com',
                pass: 'Dalecarnegie521985',
            }
        })
        transport.sendMail({
            from: 'zenominhhoang@gmail.com',
            to: email,
            subject: "Quên mật khẩu",
            html: `<h1>Xác nhận mật khẩu mới</h1>
                <h2>Xin chào ${name}</h2>
                <p>Vui lòng nhấn vào đường link dưới đây để tạo mật khẩu mới!</p>
                <a href=http://localhost:3002/reset-password/${confirmationCode}>Link</a>
                </div>`,
        }).catch(err => console.log(err));
    }

    async checkBeforeVerifyPassword(confirmationCode: string) {
        let user = await this.userModel.findOne({ confirmationCode });
        if (!user) {
            throw new HttpException('Not page found', 201)
        } else {
            return user;
        }
    }

    async verifyPassword(confirmationCode: string, newPassword: string) {
        let user = await this.userModel.findOne({ confirmationCode });
        if (!user) {
            throw new HttpException('Not page found', 201)
        } else {
            const isMatch = await bcrypt.compare(newPassword, user.password);
            if (isMatch) {
                throw new HttpException('Mat khau moi khong trung voi mat khau cu', 201)
            }
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(newPassword, saltOrRounds);
            user.password = hash;
            const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let token = '';
            for (let i = 0; i < 25; i++) {
                token += characters[Math.floor(Math.random() * characters.length)];
            }
            user.confirmationCode = token;
            return user.save();
        }
    }


    async updateById(user, updateUserDto, photoURL?: string) {
        let modelUser = await this.userModel.findById(user._id);
        if (photoURL) {
            
            modelUser.photoURL = photoURL;
            modelUser.firstName = updateUserDto.firstName;
            modelUser.lastName = updateUserDto.lastName;
            modelUser.fullName = `${updateUserDto.firstName} ${updateUserDto.lastName}`;
        } else {
            modelUser.firstName = updateUserDto.firstName;
            modelUser.lastName = updateUserDto.lastName;
            modelUser.fullName = `${updateUserDto.firstName} ${updateUserDto.lastName}`;
        }
        return modelUser.save();

    }

    async roleUser(id, role) {
        const user = await this.userModel.findById(id.toString());
        user.roles = role;
        return user.save();
    }
}
