import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttendanceUserController } from './attendance-user.controller';
import { AttendanceUserService } from './attendance-user.service';
import { AttendanceUser, AttendanceUserSchema } from './schemas/attendance-user.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: AttendanceUser.name, schema: AttendanceUserSchema }])],
  controllers: [AttendanceUserController],
  providers: [AttendanceUserService]
})
export class AttendanceUserModule {}
