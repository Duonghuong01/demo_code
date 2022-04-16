import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AttendanceUserService } from './attendance-user.service';

@Controller('attendance-user')
export class AttendanceUserController {
  constructor(private attendanceUserService: AttendanceUserService) { }


  @UseGuards(JwtAuthGuard)
  @Post('status')
  async changeAttendanceUserStatus(@Body() body, @Request() req) {
    return this.attendanceUserService.attendanceUserStatus(body, req.user._doc._id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('status-admin')
  async changeAttendanceUserStatusByAdmin(@Body() body) {
    return this.attendanceUserService.attendanceUserStatusByAdmin(body)
  }
}
