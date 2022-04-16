import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) { }

  @Get()
  async findAll() {
    return this.attendanceService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('detail?')
  async findById(@Query('attendanceId') attendanceId, @Query('status') status) {
    return this.attendanceService.findById(attendanceId,status);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() body) {
    return this.attendanceService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Post('edit/:attendanceId')
  async edit(@Param('attendanceId') attendanceId, @Body() body) {
    return this.attendanceService.edit(attendanceId, body)
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete/:attendanceId')
  async delete(@Param('attendanceId') attendanceId) {
    return this.attendanceService.delete(attendanceId)
  }

}
