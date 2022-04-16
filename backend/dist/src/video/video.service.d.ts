import { Model } from 'mongoose';
import { VideoDto } from './dto/video-dto.dto';
import { Video, VideoDocument } from './schemas/video.schemas';
export declare class VideoService {
    private videoModel;
    constructor(videoModel: Model<VideoDocument>);
    loadMore(videoId: any): Promise<(Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAll(skipNumber: any): Promise<{
        totalPage: number;
        data: (Video & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    search(textSearch: any): Promise<(Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createVideo(createVideoDto: VideoDto, category: any, photoURL: string, username: string): Promise<Video>;
    findById(id: string): Promise<Video>;
    deleteById(id: string): Promise<void>;
    updateById(id: string, updateVideoDto: VideoDto, category: any, photoURL?: string): Promise<Video>;
}
