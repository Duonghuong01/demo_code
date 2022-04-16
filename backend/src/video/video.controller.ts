import { Body, Controller, Delete, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) { }


  @Get(':skipNumber')
  async getBlogs(@Param('skipNumber') skipNumber) {
    return this.videoService.findAll(skipNumber)
  }

  @Post('loadmore')
  async getBlogsLoadMore(@Body() body) {
    return this.videoService.loadMore(body.blogId)
  }

  @Post('search')
  async searchBlogs(@Body() body) {
    return this.videoService.search(body.textSearch)
  }


  @UseGuards(JwtAuthGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${(file.originalname)}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body, @Request() req) {
    return this.videoService.createVideo({
      title: body.title,
      videoUrl: body.videoUrl,
      metaDescription: body.metaDescription,
      content: body.content
    }, body.category, file.filename, req.user._doc.fullName)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async removeBlog(@Param('id') id) {
    return this.videoService.deleteById(id)
  }

  @Get('detail/:id')
  async getBlogById(@Param('id') id) {
    return this.videoService.findById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('edit/:id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${(file.originalname)}`)
      }
    })
  }))
  async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body, @Param('id') id) {
    if (file) {
      return this.videoService.updateById(id, {
        title: body.title,
        videoUrl: body.videoUrl,
        metaDescription: body.metaDescription,
        content: body.content
      }, body.category, file.filename)
    } else {
      return this.videoService.updateById(id, {
        title: body.title,
        videoUrl: body.videoUrl,
        metaDescription: body.metaDescription,
        content: body.content
      }, body.category)
    }
  }
}
