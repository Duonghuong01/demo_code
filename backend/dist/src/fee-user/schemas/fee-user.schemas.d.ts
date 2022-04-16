import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import { Fee } from 'src/fee/schemas/fee.schemas';
export declare type FeeUserDocument = FeeUser & Document;
export declare class FeeUser {
    id: mongoose.Schema.Types.ObjectId;
    user: User;
    fee: Fee;
    status: string;
    photoURL: string[];
    createdAt: Date;
}
export declare const FeeUserSchema: mongoose.Schema<Document<FeeUser, any, any>, mongoose.Model<Document<FeeUser, any, any>, any, any, any>, any, any>;
