import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/schemas/category.schemas';
import { Tag } from 'src/tag/schemas/tag.schemas';
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: mongoose.Schema.Types.ObjectId;
    title: String;
    category: Category;
    tag: Tag;
    price: Number;
    content: String;
    warn: String;
    animate: String;
    photoURL: String;
    createdAt: Date;
}
export declare const ProductSchema: mongoose.Schema<Document<Product, any, any>, mongoose.Model<Document<Product, any, any>, any, any, any>, any, any>;
