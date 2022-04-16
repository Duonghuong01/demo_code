import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type CategoryDocument = Category & Document;
export declare class Category {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    createdAt: Date;
}
export declare const CategorySchema: mongoose.Schema<Document<Category, any, any>, mongoose.Model<Document<Category, any, any>, any, any, any>, any, any>;
