import { Model } from 'mongoose';
import { AttendanceUser, AttendanceUserDocument } from './schemas/attendance-user.schemas';
export declare class AttendanceUserService {
    private attendanceUserModel;
    constructor(attendanceUserModel: Model<AttendanceUserDocument>);
    attendanceUserStatus(attendanceUserDto: any, user: any): Promise<AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    attendanceUserStatusByAdmin(attendanceUserDto: any): Promise<AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
