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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_user_schemas_1 = require("../payment-user/schemas/payment-user.schemas");
const user_schemas_1 = require("../user/schemas/user.schemas");
const payment_schemas_1 = require("./schemas/payment.schemas");
let PaymentService = class PaymentService {
    constructor(paymentModel, userModel, paymentUserModel) {
        this.paymentModel = paymentModel;
        this.userModel = userModel;
        this.paymentUserModel = paymentUserModel;
    }
    async findAll() {
        return this.paymentModel.find();
    }
    async findById(paymentId, status) {
        if (status == "Tất cả") {
            return this.paymentUserModel.find({ payment: paymentId }).populate("user", "fullName email phoneNumber", "User");
        }
        else {
            return this.paymentUserModel.find({ payment: paymentId, status: status }).populate("user", "fullName email phoneNumber", "User");
        }
    }
    async create(paymentDto) {
        let payment = new this.paymentModel(Object.assign({}, paymentDto));
        let users = await this.userModel.find({ roles: 'user' });
        users.forEach(user => {
            let paymentUser = new this.paymentUserModel({
                payment: payment._id,
                user: user._id
            });
            paymentUser.save();
        });
        return payment.save();
    }
    async edit(paymentId, paymentDto) {
        var _a;
        let payment = await this.paymentModel.findById(paymentId);
        payment.title = (_a = paymentDto === null || paymentDto === void 0 ? void 0 : paymentDto.title) === null || _a === void 0 ? void 0 : _a.trim();
        payment.fee = paymentDto.fee;
        return payment.save();
    }
    async delete(paymentId) {
        let payment = await this.paymentModel.findById(paymentId);
        let paymentUsers = await this.paymentUserModel.find({ payment: payment._id });
        paymentUsers.forEach(paymentUser => paymentUser.remove());
        return payment.remove();
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_schemas_1.Payment.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schemas_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(payment_user_schemas_1.PaymentUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map