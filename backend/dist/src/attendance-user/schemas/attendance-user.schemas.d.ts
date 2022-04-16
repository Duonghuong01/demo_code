import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Attendance } from 'src/attendance/schemas/attendance.schemas';
import { User } from 'src/user/schemas/user.schemas';
export declare type AttendanceUserDocument = AttendanceUser & Document;
export declare class AttendanceUser {
    id: mongoose.Schema.Types.ObjectId;
    attendance: Attendance;
    user: User;
    status: string;
}
export declare const AttendanceUserSchema: mongoose.Schema<Document<AttendanceUser, any, any>, mongoose.Model<Document<AttendanceUser, any, any>, any, any, any>, any, any>;
