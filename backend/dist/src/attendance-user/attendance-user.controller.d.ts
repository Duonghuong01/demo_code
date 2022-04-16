import { AttendanceUserService } from './attendance-user.service';
export declare class AttendanceUserController {
    private attendanceUserService;
    constructor(attendanceUserService: AttendanceUserService);
    changeAttendanceUserStatus(body: any, req: any): Promise<import("./schemas/attendance-user.schemas").AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    changeAttendanceUserStatusByAdmin(body: any): Promise<import("./schemas/attendance-user.schemas").AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
