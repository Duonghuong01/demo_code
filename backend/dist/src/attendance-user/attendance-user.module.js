"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceUserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const attendance_user_controller_1 = require("./attendance-user.controller");
const attendance_user_service_1 = require("./attendance-user.service");
const attendance_user_schemas_1 = require("./schemas/attendance-user.schemas");
let AttendanceUserModule = class AttendanceUserModule {
};
AttendanceUserModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: attendance_user_schemas_1.AttendanceUser.name, schema: attendance_user_schemas_1.AttendanceUserSchema }])],
        controllers: [attendance_user_controller_1.AttendanceUserController],
        providers: [attendance_user_service_1.AttendanceUserService]
    })
], AttendanceUserModule);
exports.AttendanceUserModule = AttendanceUserModule;
//# sourceMappingURL=attendance-user.module.js.map