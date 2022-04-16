import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentUser, PaymentUserDocument } from 'src/payment-user/schemas/payment-user.schemas';
import { User, UserDocument } from 'src/user/schemas/user.schemas';
import { Payment, PaymentDocument } from './schemas/payment.schemas';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(PaymentUser.name) private paymentUserModel: Model<PaymentUserDocument>
  ) { }

  async findAll() {
    return this.paymentModel.find();
  }

  async findById(paymentId, status) {
    if (status == "Tất cả") {
      return this.paymentUserModel.find({ payment: paymentId }).populate("user", "fullName email phoneNumber", "User");
    } else {
      return this.paymentUserModel.find({ payment: paymentId, status: status }).populate("user", "fullName email phoneNumber", "User");
    }

  }

  async create(paymentDto: any) {
    let payment = new this.paymentModel({ ...paymentDto });
    let users = await this.userModel.find({ roles: 'user' });
    users.forEach(user => {
      let paymentUser = new this.paymentUserModel({
        payment: payment._id,
        user: user._id
      })
      paymentUser.save();
    })
    return payment.save();
  }

  async edit(paymentId, paymentDto: any) {
    let payment = await this.paymentModel.findById(paymentId);
    payment.title = paymentDto?.title?.trim();
    payment.fee = paymentDto.fee;
    return payment.save();
  }

  async delete(paymentId) {
    let payment = await this.paymentModel.findById(paymentId);
    let paymentUsers = await this.paymentUserModel.find({ payment: payment._id });
    paymentUsers.forEach(paymentUser => paymentUser.remove());
    return payment.remove();
  }
 
}
