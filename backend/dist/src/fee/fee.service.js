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
exports.FeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fee_user_schemas_1 = require("../fee-user/schemas/fee-user.schemas");
const user_schemas_1 = require("../user/schemas/user.schemas");
const fee_schemas_1 = require("./schemas/fee.schemas");
let FeeService = class FeeService {
    constructor(feeModel, feeUserModel, userModel) {
        this.feeModel = feeModel;
        this.feeUserModel = feeUserModel;
        this.userModel = userModel;
    }
    async findAll() {
        return this.feeModel.find();
    }
    async findById(id) {
        let fee = await this.feeModel.findById(id);
        let feeUsers = await this.feeUserModel.find({ fee: fee === null || fee === void 0 ? void 0 : fee._id }).populate("user", "email username", "User");
        return feeUsers;
    }
    async create(body) {
        let fee = new this.feeModel({ title: body.title, time: body.time });
        let users = await this.userModel.find({ status: 'Active' });
        users.forEach(user => {
            let feeUser = new this.feeUserModel({
                user: user._id,
                fee: fee._id
            });
            fee.feeUsers.push(feeUser._id);
            feeUser.save();
        });
        return fee.save();
    }
    async remove(id) {
        let fee = await this.feeModel.findById(id);
        return fee.remove();
    }
    async pushFeeUser(feeId, feeUser) {
        let fee = await this.feeModel.findById(feeId);
        fee.feeUsers.push(feeUser);
        fee.save();
    }
};
FeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(fee_schemas_1.Fee.name)),
    __param(1, (0, mongoose_1.InjectModel)(fee_user_schemas_1.FeeUser.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schemas_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], FeeService);
exports.FeeService = FeeService;
//# sourceMappingURL=fee.service.js.map