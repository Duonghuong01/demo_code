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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceUserSchema = exports.AttendanceUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const attendance_schemas_1 = require("../../attendance/schemas/attendance.schemas");
const user_schemas_1 = require("../../user/schemas/user.schemas");
let AttendanceUser = class AttendanceUser {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], AttendanceUser.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }),
    __metadata("design:type", attendance_schemas_1.Attendance)
], AttendanceUser.prototype, "attendance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schemas_1.User)
], AttendanceUser.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Chưa điểm danh' }),
    __metadata("design:type", String)
], AttendanceUser.prototype, "status", void 0);
AttendanceUser = __decorate([
    (0, mongoose_1.Schema)()
], AttendanceUser);
exports.AttendanceUser = AttendanceUser;
exports.AttendanceUserSchema = mongoose_1.SchemaFactory.createForClass(AttendanceUser);
//# sourceMappingURL=attendance-user.schemas.js.map