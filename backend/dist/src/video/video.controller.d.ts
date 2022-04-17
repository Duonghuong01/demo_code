/// <reference types="multer" />
/// <reference types="mongoose" />
import { VideoService } from './video.service';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    getBlogs(skipNumber: any): Promise<{
        totalPage: number;
        data: (import("./schemas/video.schemas").Video & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    getBlogsLoadMore(body: any): Promise<(import("./schemas/video.schemas").Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    searchBlogs(body: any): Promise<(import("./schemas/video.schemas").Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    uploadFile(file: Express.Multer.File, body: any, req: any): Promise<import("./schemas/video.schemas").Video>;
    removeBlog(id: any): Promise<void>;
    getBlogById(id: any): Promise<import("./schemas/video.schemas").Video>;
    updateBlog(file: Express.Multer.File, body: any, id: any): Promise<import("./schemas/video.schemas").Video>;
}
