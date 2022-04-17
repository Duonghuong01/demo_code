"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schemas_1 = require("./schemas/user.schemas");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const user_status_enum_1 = require("./enum/user-status.enum");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return this.userModel.find();
    }
    async findOne(username) {
        let user = await this.userModel.findOne({ username });
        return user;
    }
    async register(createUserDto) {
        await this.checkUniqueBeforeRegister(createUserDto.email, createUserDto.username);
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length)];
        }
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
        const user = new this.userModel(Object.assign(Object.assign({}, createUserDto), { confirmationCode: token, fullName: `${createUserDto.firstName} ${createUserDto.lastName}`, password: hash }));
        this.sendEmailRegister(user.fullName, user.email, user.confirmationCode);
        return user.save();
    }
    async checkUniqueBeforeRegister(email, username) {
        let userEmail = await this.userModel.findOne({ email });
        if (userEmail) {
            throw new common_1.HttpException("Email đã tồn tại", 201);
        }
        else {
            let userUsername = await this.userModel.findOne({ username });
            if (userUsername) {
                throw new common_1.HttpException("Username đã tồn tại", 201);
            }
        }
    }
    async sendEmailRegister(name, email, confirmationCode) {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'zenominhhoang@gmail.com',
                pass: 'Dalecarnegie521985',
            }
        });
        transport.sendMail({
            from: 'zenominhhoang@gmail.com',
            to: email,
            subject: "Vui lòng xác nhận tài khoản của bạn",
            html: `<h1>Email xác nhận</h1>
                <h2>Xin chào ${name}</h2>
                <p>Cảm ơn bạn đã đăng ký. Vui lòng xác nhận tài khoản bằng cách nhấn vào đường link dưới đây</p>
                <a href=http://localhost:3001/verify-email/${confirmationCode}>Link</a>
                </div>`,
        }).catch(err => console.log(err));
    }
    async verifyUser(confirmationCode) {
        let user = await this.userModel.findOne({ confirmationCode });
        if (user) {
            if (user.status == user_status_enum_1.UserStatus.Active) {
                throw new common_1.HttpException('Not page found', 201);
            }
            else if (user.status == user_status_enum_1.UserStatus.Pending) {
                user.status = user_status_enum_1.UserStatus.Active;
                return user.save();
            }
        }
        else {
            throw new common_1.HttpException('Not page found', 201);
        }
    }
    async changePassword(oldPassword, newPassword, email) {
        let user = await this.userModel.findOne({ email });
        const isMatchPassword = await bcrypt.compare(oldPassword, user.password);
        if (isMatchPassword) {
            const isMatch = await bcrypt.compare(newPassword, user.password);
            if (isMatch) {
                throw new common_1.HttpException("Mật khẩu mới không được trùng với mật khẩu cũ", 201);
            }
            else {
                const saltOrRounds = 10;
                const hash = await bcrypt.hash(newPassword, saltOrRounds);
                user.password = hash;
                user.save();
                throw new common_1.HttpException("Thay đổi mật khẩu thành công", 200);
            }
        }
        else {
            throw new common_1.HttpException("Mật khẩu cũ chưa đúng!", 201);
        }
    }
    async forgotPassword(email) {
        let user = await this.userModel.findOne({ email });
        if (user) {
            this.sendEmailForgotPassword(user.fullName, user.email, user.confirmationCode);
            return user;
        }
        else {
            throw new common_1.HttpException('Email không tồn tại', 201);
        }
    }
    async sendEmailForgotPassword(name, email, confirmationCode) {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'zenominhhoang@gmail.com',
                pass: 'Dalecarnegie521985',
            }
        });
        transport.sendMail({
            from: 'zenominhhoang@gmail.com',
            to: email,
            subject: "Quên mật khẩu",
            html: `<h1>Xác nhận mật khẩu mới</h1>
                <h2>Xin chào ${name}</h2>
                <p>Vui lòng nhấn vào đường link dưới đây để tạo mật khẩu mới!</p>
                <a href=http://localhost:3001/reset-password/${confirmationCode}>Link</a>
                </div>`,
        }).catch(err => console.log(err));
    }
    async checkBeforeVerifyPassword(confirmationCode) {
        let user = await this.userModel.findOne({ confirmationCode });
        if (!user) {
            throw new common_1.HttpException('Not page found', 201);
        }
        else {
            return user;
        }
    }
    async verifyPassword(confirmationCode, newPassword) {
        let user = await this.userModel.findOne({ confirmationCode });
        if (!user) {
            throw new common_1.HttpException('Not page found', 201);
        }
        else {
            const isMatch = await bcrypt.compare(newPassword, user.password);
            if (isMatch) {
                throw new common_1.HttpException('Mat khau moi khong trung voi mat khau cu', 201);
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
    async updateById(user, updateUserDto, photoURL) {
        let modelUser = await this.userModel.findById(user._id);
        if (photoURL) {
            modelUser.photoURL = photoURL;
            modelUser.firstName = updateUserDto.firstName;
            modelUser.lastName = updateUserDto.lastName;
            modelUser.fullName = `${updateUserDto.firstName} ${updateUserDto.lastName}`;
        }
        else {
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
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schemas_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map