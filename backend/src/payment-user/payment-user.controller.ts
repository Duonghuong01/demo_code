import { Body, Controller, Post, UseGuards, Request, Response, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { PaymentUserService } from './payment-user.service';

@Controller('payment-user')
export class PaymentUserController {
  constructor(private paymentUserService: PaymentUserService) { }


  @UseGuards(JwtAuthGuard)
  @Get()
  async findPaymentByUser(@Request() req) {
    return this.paymentUserService.findPaymentByUser(req.user._doc._id)
  }

  @UseGuards(JwtAuthGuard)
  @Get('payment/:paymentUserId')
  async paymentUserStatusByUser(@Param('paymentUserId') paymentUserId) {
    return this.paymentUserService.paymentUserStatus(paymentUserId)
  }

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
