import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type AttendanceDocument = Attendance & Document;
export declare class Attendance {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    code: string;
    startDate: Date;
    endDate: Date;
}
export declare const AttendanceSchema: mongoose.Schema<Document<Attendance, any, any>, mongoose.Model<Document<Attendance, any, any>, any, any, any>, any, any>;
