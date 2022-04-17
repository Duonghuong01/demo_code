import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentUser, PaymentUserDocument } from './schemas/payment-user.schemas';
@Injectable()
export class PaymentUserService {
  constructor(
    @InjectModel(PaymentUser.name) private paymentUserModel: Model<PaymentUserDocument>
  ) { }



  async findPaymentByUser(user) {
    return this.paymentUserModel.find({ user }).populate("payment", "title fee", "Payment")
  }

  async paymentUserStatusByAdmin(paymentUserDto) {
    let paymentUser = await this.paymentUserModel.findOne({ payment: paymentUserDto.payment, user: paymentUserDto.user });
    if (paymentUser) {
      paymentUser.status = paymentUserDto.status.trim();
      return paymentUser.save();
    }
  }

  async paymentUserStatus(paymentUserDto) {
    var mongoose = require('mongoose');
    if (mongoose.Types.ObjectId.isValid(paymentUserDto)) {
      let paymentUser = await this.paymentUserModel.findById(paymentUserDto)
      if (paymentUser) {
        if (paymentUser.status == 'Chưa nộp') {
          paymentUser.status = 'Đã nộp';
          return paymentUser.save();
        }
      }
    }
  }


  async createPayment(body, req, res) {

    const { orderType, amount, orderDescription, bankCode, language, paymentUser } = body

    var tmnCode = "VV2XA67I";
    var secretKey = "TGFARZKFBTSJAQHNENLUFOLEVBLVKJOP";
    var vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    var returnUrl = `http://localhost:3001/payment-infor?paymentUser=${paymentUser}`;

    var ipAddr = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    var dateFormat = require('dateformat');
    var date = new Date();
    var vnp_Params = {};
    var createDate = dateFormat(date, 'yyyymmddHHmmss');
    var orderId = dateFormat(date, 'HHmmss');

    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = language;
    vnp_Params['vnp_CurrCode'] = 'VND';
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderDescription;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    vnp_Params['vnp_BankCode'] = bankCode;

    vnp_Params = await this.sortObject(vnp_Params);
    var querystring = require('qs');
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    return res.send(vnpUrl)
  }


  async sortObject(obj) {
    var sorted = {};
    var str = [];
    var key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
      }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
      sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
  }
}
