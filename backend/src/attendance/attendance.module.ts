import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceUser, AttendanceUserSchema } from 'src/attendance-user/schemas/attendance-user.schemas';
import { User, UserSchema } from 'src/user/schemas/user.schemas';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { Attendance, AttendanceSchema } from './schemas/attendance.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Attendance.name, schema: AttendanceSchema }]),
  MongooseModule.forFeature([{ name: AttendanceUser.name, schema: AttendanceUserSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule { }
