/// <reference types="multer" />
/// <reference types="mongoose" />
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog-dto.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    getBlogs(skipNumber: any): Promise<{
        totalPage: number;
        data: (import("./schemas/blog.schemas").Blog & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    getBlogsLoadMore(body: any): Promise<(import("./schemas/blog.schemas").Blog & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    searchBlogs(body: any): Promise<(import("./schemas/blog.schemas").Blog & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    uploadFile(file: Express.Multer.File, body: BlogDto, req: any): Promise<import("./schemas/blog.schemas").Blog>;
    removeBlog(id: any): Promise<void>;
    getBlogById(id: any): Promise<import("./schemas/blog.schemas").Blog>;
    updateBlog(file: Express.Multer.File, body: BlogDto, id: any): Promise<import("./schemas/blog.schemas").Blog>;
}
