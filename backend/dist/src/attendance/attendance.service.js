"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const attendance_user_schemas_1 = require("../attendance-user/schemas/attendance-user.schemas");
const user_schemas_1 = require("../user/schemas/user.schemas");
const attendance_schemas_1 = require("./schemas/attendance.schemas");
let AttendanceService = class AttendanceService {
    constructor(attendanceModel, userModel, attendanceUserModel) {
        this.attendanceModel = attendanceModel;
        this.userModel = userModel;
        this.attendanceUserModel = attendanceUserModel;
    }
    async findAll() {
        return this.attendanceModel.find();
    }
    async findById(attendanceId, status) {
        if (status == "Tất cả") {
            return this.attendanceUserModel.find({ attendance: attendanceId }).populate("user", "fullName email phoneNumber", "User");
        }
        else {
            return this.attendanceUserModel.find({ attendance: attendanceId, status: status }).populate("user", "fullName email phoneNumber", "User");
        }
    }
    async create(attendanceDto) {
        let attendance = new this.attendanceModel(Object.assign({}, attendanceDto));
        let users = await this.userModel.find({ roles: 'user' });
        users.forEach(user => {
            let attendanceUser = new this.attendanceUserModel({
                attendance: attendance._id,
                user: user._id
            });
            attendanceUser.save();
        });
        return attendance.save();
    }
    async edit(attendanceId, attendanceDto) {
        let attendance = await this.attendanceModel.findById(attendanceId);
        attendance.title = attendanceDto.title;
        attendance.code = attendanceDto.code;
        attendance.startDate = attendanceDto.startDate;
        attendance.endDate = attendanceDto.endDate;
        return attendance.save();
    }
    async delete(attendanceId) {
        let attendance = await this.attendanceModel.findById(attendanceId);
        let attendanceUsers = await this.attendanceUserModel.find({ attendance: attendance._id });
        attendanceUsers.forEach(attendanceUser => attendanceUser.remove());
        return attendance.remove();
    }
};
AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(attendance_schemas_1.Attendance.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schemas_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(attendance_user_schemas_1.AttendanceUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AttendanceService);
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map