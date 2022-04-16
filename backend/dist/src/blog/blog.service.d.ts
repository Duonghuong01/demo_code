import { Model } from 'mongoose';
import { BlogDto } from './dto/blog-dto.dto';
import { Blog, BlogDocument } from './schemas/blog.schemas';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: Model<BlogDocument>);
    loadMore(blogId: any): Promise<(Blog & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAll(skipNumber: any): Promise<{
        totalPage: number;
        data: (Blog & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    search(textSearch: any): Promise<(Blog & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createBlog(createBlogDto: BlogDto, photoURL: string, username: string): Promise<Blog>;
    findById(id: string): Promise<Blog>;
    deleteById(id: string): Promise<void>;
    updateById(id: string, updateBlogDto: BlogDto, photoURL?: string): Promise<Blog>;
}
