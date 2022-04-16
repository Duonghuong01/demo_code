import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
export declare type FeedbackDocument = Feedback & Document;
export declare class Feedback {
    id: mongoose.Schema.Types.ObjectId;
    content: string;
    createdBy: User;
    createdAt: Date;
}
export declare const FeedbackSchema: mongoose.Schema<Document<Feedback, any, any>, mongoose.Model<Document<Feedback, any, any>, any, any, any>, any, any>;
