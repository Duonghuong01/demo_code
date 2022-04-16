import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import { ProductCountDown } from 'src/productcountdown/schemas/productcountdown.schemas';
export declare type VoteUserDocument = VoteUser & Document;
export declare class VoteUser {
    id: mongoose.Schema.Types.ObjectId;
    user: User;
    productCountDown: ProductCountDown;
    createdAt: Date;
}
export declare const VoteUserSchema: mongoose.Schema<Document<VoteUser, any, any>, mongoose.Model<Document<VoteUser, any, any>, any, any, any>, any, any>;
