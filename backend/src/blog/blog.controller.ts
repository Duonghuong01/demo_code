import { Body, Controller, Delete, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog-dto.dto';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) { }


    @Get(':skipNumber')
    async getBlogs(@Param('skipNumber') skipNumber) {
        return this.blogService.findAll(skipNumber)
    }

    @Post('loadmore')
    async getBlogsLoadMore(@Body() body) {
        return this.blogService.loadMore(body.blogId)
    }

    @Post('search')
    async searchBlogs(@Body() body) {
        return this.blogService.search(body.textSearch)
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
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: BlogDto, @Request() req) {
        return this.blogService.createBlog(body, file.filename, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async removeBlog(@Param('id') id) {
        return this.blogService.deleteById(id)
    }

    @Get('detail/:id')
    async getBlogById(@Param('id') id) {
        return this.blogService.findById(id)
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
    async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body: BlogDto, @Param('id') id) {
        if (file) {
            return this.blogService.updateById(id, body, file.filename)
        } else {
            return this.blogService.updateById(id, body)
        }
    }

}
