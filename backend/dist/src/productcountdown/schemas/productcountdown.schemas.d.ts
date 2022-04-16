import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
import { CountDown } from 'src/countdown/schemas/countdown.schemas';
import { User } from 'src/user/schemas/user.schemas';
export declare type ProductCountDownDocument = ProductCountDown & Document;
export declare class ProductCountDown {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    countdown: CountDown;
    votes: User[];
    product: Product;
    createdAt: Date;
}
export declare const ProductCountDownSchema: mongoose.Schema<Document<ProductCountDown, any, any>, mongoose.Model<Document<ProductCountDown, any, any>, any, any, any>, any, any>;
