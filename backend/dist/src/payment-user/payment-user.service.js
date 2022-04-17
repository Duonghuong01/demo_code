"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_user_schemas_1 = require("./schemas/payment-user.schemas");
let PaymentUserService = class PaymentUserService {
    constructor(paymentUserModel) {
        this.paymentUserModel = paymentUserModel;
    }
    async findPaymentByUser(user) {
        return this.paymentUserModel.find({ user }).populate("payment", "title fee", "Payment");
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
            let paymentUser = await this.paymentUserModel.findById(paymentUserDto);
            if (paymentUser) {
                if (paymentUser.status == 'Chưa nộp') {
                    paymentUser.status = 'Đã nộp';
                    return paymentUser.save();
                }
            }
        }
    }
    async createPayment(body, req, res) {
        const { orderType, amount, orderDescription, bankCode, language, paymentUser } = body;
        var tmnCode = "VV2XA67I";
        var secretKey = "TGFARZKFBTSJAQHNENLUFOLEVBLVKJOP";
        var vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        var returnUrl = `http://localhost:3002/payment-infor?paymentUser=${paymentUser}`;
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
        return res.send(vnpUrl);
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
};
PaymentUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_user_schemas_1.PaymentUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaymentUserService);
exports.PaymentUserService = PaymentUserService;
//# sourceMappingURL=payment-user.service.js.map