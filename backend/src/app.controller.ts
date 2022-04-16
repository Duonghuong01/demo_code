import { Controller, Get, Param, Post, Response, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { of } from 'rxjs';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  getHello() {
    return this.appService.sendEmail();
  }

  @Get('image/:imagename')
  getImage(@Param('imagename') imagename, @Response() res) {
    if (imagename !== undefined) {
      return of(res.sendFile(join(__dirname, '../../uploads/', imagename)))
    } else {
      return of(res.sendFile(join(__dirname, '../../uploads/', "0ceab74e72410082339bf1cb19107c1074cba81daacac6fc05b75d4f5fcded30640280d0c9eacc41bd30dd8ffd9f90bb10a.jpeg")))
    }

  }


  @Post('image')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${(file.originalname)}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file.filename
  }

}
