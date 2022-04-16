import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/schemas/category.schemas';
export declare type VideoDocument = Video & Document;
export declare class Video {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    videoUrl: string;
    category: Category;
    content: string;
    metaDescription: string;
    photoURL: string;
    createdBy: string;
    createdAt: Date;
}
export declare const VideoSchema: mongoose.Schema<Document<Video, any, any>, mongoose.Model<Document<Video, any, any>, any, any, any>, any, any>;
