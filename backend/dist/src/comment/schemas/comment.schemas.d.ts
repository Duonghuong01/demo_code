import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
export declare type CommentDocument = Comment & Document;
export declare class Comment {
    id: mongoose.Schema.Types.ObjectId;
    typeId: string;
    title: string;
    createdBy: User;
    createdAt: Date;
}
export declare const CommentSchema: mongoose.Schema<Document<Comment, any, any>, mongoose.Model<Document<Comment, any, any>, any, any, any>, any, any>;
