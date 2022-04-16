import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type TestDocument = Test & Document;
export declare class Test {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    content: string;
    createdAt: Date;
}
export declare const TestSchema: mongoose.Schema<mongoose.Document<Test, any, any>, mongoose.Model<mongoose.Document<Test, any, any>, any, any, any>, any, any>;
