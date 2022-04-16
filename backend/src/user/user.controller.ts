import { Body, Controller, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }


    @Get()
    async findAll() {
        return this.userService.findAll()
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.register(createUserDto)
    }

    @Get('confirm/:confirmationCode')
    async verifyUser(@Param('confirmationCode') confirmationCode: string) {
        return this.userService.verifyUser(confirmationCode)
    }

    @UseGuards(JwtAuthGuard)
    @Post('change-password')
    async changePassword(@Request() req, @Body() body) {
        return this.userService.changePassword(body.oldPassword, body.newPassword, req.user._doc.email)
    }

    @Post('forgot-password')
    async forgotPassword(@Body() body) {
        return this.userService.forgotPassword(body.email)
    }

    @Post('verify-password')
    async verifyPassword(@Body() body) {
        return this.userService.verifyPassword(body.confirmationCode, body.newPassword)
    }

    @Get('verify-password/:confirmationCode')
    async checkBeforePassword(@Param('confirmationCode') confirmationCode: string) {
        return this.userService.checkBeforeVerifyPassword(confirmationCode)
    }


    @UseGuards(JwtAuthGuard)
    @Post('update')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async updateUser(@UploadedFile() file: Express.Multer.File, @Body() body, @Request() req) {
        if (file) {
            return this.userService.updateById(req.user._doc, body, file.filename)
        } else {
            return this.userService.updateById(req.user._doc, body)
        }
    }


    @UseGuards(JwtAuthGuard)
    @Post('role')
    async roleUser(@Body() body){
        return this.userService.roleUser(body.id,body.role);
    }
}
