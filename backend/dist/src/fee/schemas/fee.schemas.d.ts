import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { FeeUser } from 'src/fee-user/schemas/fee-user.schemas';
export declare type FeeDocument = Fee & Document;
export declare class Fee {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    time: Date;
    feeUsers: FeeUser[];
}
export declare const FeeSchema: mongoose.Schema<Document<Fee, any, any>, mongoose.Model<Document<Fee, any, any>, any, any, any>, any, any>;
