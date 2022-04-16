import { Model } from 'mongoose';
import { AttendanceUser, AttendanceUserDocument } from 'src/attendance-user/schemas/attendance-user.schemas';
import { UserDocument } from 'src/user/schemas/user.schemas';
import { Attendance, AttendanceDocument } from './schemas/attendance.schemas';
export declare class AttendanceService {
    private attendanceModel;
    private userModel;
    private attendanceUserModel;
    constructor(attendanceModel: Model<AttendanceDocument>, userModel: Model<UserDocument>, attendanceUserModel: Model<AttendanceUserDocument>);
    findAll(): Promise<(Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(attendanceId: any, status: any): Promise<(AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(attendanceDto: any): Promise<Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(attendanceId: any, attendanceDto: any): Promise<Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(attendanceId: any): Promise<Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
