import { Body, Controller, Get, Param, Post, Query, Request, Response, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Get()
  async findAll() {
    return this.paymentService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('detail?')
  async findById(@Query('paymentId') paymentId, @Query('status') status) {
    return this.paymentService.findById(paymentId,status);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() body) {
    return this.paymentService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Post('edit/:paymentId')
  async edit(@Param('paymentId') paymentId, @Body() body) {
    return this.paymentService.edit(paymentId, body)
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete/:paymentId')
  async delete(@Param('paymentId') paymentId) {
    return this.paymentService.delete(paymentId)
  }


}
