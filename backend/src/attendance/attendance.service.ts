import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttendanceUser, AttendanceUserDocument } from 'src/attendance-user/schemas/attendance-user.schemas';
import { User, UserDocument } from 'src/user/schemas/user.schemas';
import { Attendance, AttendanceDocument } from './schemas/attendance.schemas';

@Injectable()
export class AttendanceService {
  constructor(@InjectModel(Attendance.name) private attendanceModel: Model<AttendanceDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(AttendanceUser.name) private attendanceUserModel: Model<AttendanceUserDocument>
  ) { }

  async findAll() {
    return this.attendanceModel.find();
  }

  async findById(attendanceId, status) {
    if (status == "Tất cả") {
      return this.attendanceUserModel.find({ attendance: attendanceId }).populate("user", "fullName email phoneNumber", "User");
    } else {
      return this.attendanceUserModel.find({ attendance: attendanceId, status: status }).populate("user", "fullName email phoneNumber", "User");
    }

  }

  async create(attendanceDto: any) {
    let attendance = new this.attendanceModel({ ...attendanceDto });
    let users = await this.userModel.find({ roles: 'user' });
    users.forEach(user => {
      let attendanceUser = new this.attendanceUserModel({
        attendance: attendance._id,
        user: user._id
      })
      attendanceUser.save();
    })
    return attendance.save();
  }

  async edit(attendanceId, attendanceDto: any) {
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
}
