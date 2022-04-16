import { Body, Controller, Post, UseGuards, Request, Response } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { PaymentUserService } from './payment-user.service';

@Controller('payment-user')
export class PaymentUserController {
  constructor(private paymentUserService: PaymentUserService) { }


  // @UseGuards(JwtAuthGuard)
  // @Post('status')
  // async changeAttendanceUserStatus(@Body() body, @Request() req) {
  //   return this.attendanceUserService.attendanceUserStatus(body, req.user._doc._id)
  // }

  @Post('create')
  async getPayment(@Body() body, @Request() req, @Response() res) {
    return this.paymentUserService.createPayment(body, req, res);
  }

  @UseGuards(JwtAuthGuard)
  @Post('status-admin')
  async changePaymentUserStatusByAdmin(@Body() body) {
    return this.paymentUserService.paymentUserStatusByAdmin(body)
  }
}
