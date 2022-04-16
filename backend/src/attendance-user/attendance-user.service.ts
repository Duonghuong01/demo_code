import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttendanceUser, AttendanceUserDocument } from './schemas/attendance-user.schemas';

@Injectable()
export class AttendanceUserService {
  constructor(
    @InjectModel(AttendanceUser.name) private attendanceUserModel: Model<AttendanceUserDocument>
  ) { }


  async attendanceUserStatus(attendanceUserDto, user) {
    let attendanceUser = await this.attendanceUserModel.findOne({ attendance: attendanceUserDto.attendance, user: user }).populate("attendance", "code", "Attendance");
    if (attendanceUser) {
      if (attendanceUser.attendance.code == attendanceUserDto.code.trim()) {
        attendanceUser.status = "Đã điểm danh";
        return attendanceUser.save();
      } else {
        throw new HttpException("Mã code nhập không đúng", 200)
      }
    }
  }

  async attendanceUserStatusByAdmin(attendanceUserDto) {
    let attendanceUser = await this.attendanceUserModel.findOne({ attendance: attendanceUserDto.attendance, user: attendanceUserDto.user });
    if (attendanceUser) {
      attendanceUser.status = attendanceUserDto.status.trim();
      return attendanceUser.save();
    }
  }

}
