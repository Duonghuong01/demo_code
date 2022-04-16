import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/schemas/category.schemas';
export declare type TagDocument = Tag & Document;
export declare class Tag {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    category: Category;
    createdAt: Date;
}
export declare const TagSchema: mongoose.Schema<mongoose.Document<Tag, any, any>, mongoose.Model<mongoose.Document<Tag, any, any>, any, any, any>, any, any>;
