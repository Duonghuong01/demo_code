import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    id: mongoose.Schema.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    confirmationCode: string;
    status: string;
    firstName: string;
    city: number;
    phoneNumber: string;
    district: number;
    lastName: string;
    roles: string;
    fullName: string;
    photoURL: string;
}
export declare const UserSchema: mongoose.Schema<Document<User, any, any>, mongoose.Model<Document<User, any, any>, any, any, any>, any, any>;
