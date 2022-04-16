import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
import { ProductCountDown } from 'src/productcountdown/schemas/productcountdown.schemas';
import { User } from 'src/user/schemas/user.schemas';
export declare type CountDownDocument = CountDown & Document;
export declare class CountDown {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    startDate: Date;
    endDate: Date;
    products: Product[];
    votes: User[];
    total: ProductCountDown[];
    createdAt: Date;
}
export declare const CountDownSchema: mongoose.Schema<Document<CountDown, any, any>, mongoose.Model<Document<CountDown, any, any>, any, any, any>, any, any>;
