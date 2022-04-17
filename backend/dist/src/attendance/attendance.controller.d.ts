/// <reference types="mongoose" />
import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    private attendanceService;
    constructor(attendanceService: AttendanceService);
    findAll(): Promise<(import("./schemas/attendance.schemas").Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(attendanceId: any, status: any): Promise<(import("../attendance-user/schemas/attendance-user.schemas").AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/attendance.schemas").Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(attendanceId: any, body: any): Promise<import("./schemas/attendance.schemas").Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(attendanceId: any): Promise<import("./schemas/attendance.schemas").Attendance & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
