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
exports.FeeUserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fee_service_1 = require("../fee/fee.service");
const fee_schemas_1 = require("../fee/schemas/fee.schemas");
const user_schemas_1 = require("../user/schemas/user.schemas");
const fee_user_schemas_1 = require("./schemas/fee-user.schemas");
let FeeUserService = class FeeUserService {
    constructor(feeUserModel, feeModel, userModel, feeService) {
        this.feeUserModel = feeUserModel;
        this.feeModel = feeModel;
        this.userModel = userModel;
        this.feeService = feeService;
    }
    async findAll() {
        return this.feeUserModel.find().populate('fee', 'title', 'Fee');
    }
    async create(feeStr, userId) {
        let fee = await this.feeModel.findById(feeStr.toString());
        let user = await this.userModel.findById(userId.toString());
        let feeUser = new this.feeUserModel();
        feeUser.fee = fee._id;
        feeUser.user = user._id;
        fee.feeUsers.push(feeUser._id);
        fee.save();
        return feeUser.save();
    }
    async remove(id) {
        let feeUser = await this.feeUserModel.findById(id);
        return feeUser.remove();
    }
    async update(id) {
        let feeUser = await this.feeUserModel.findById(id);
        if (feeUser.status == "Pending") {
            feeUser.status = "Active";
        }
        else {
            feeUser.status = "Pending";
        }
        return feeUser.save();
    }
    async checkstatus(feeId, userId) {
        let feeUser = await this.feeUserModel.findOne({ fee: feeId.toString(), user: userId.toString() });
        return feeUser.status;
    }
    async upPhotoURLFee(photoURL, feeId, userId) {
        let feeUser = await this.feeUserModel.findOne({ fee: feeId.toString(), user: userId.toString() });
        feeUser.photoURL.push(photoURL);
        return feeUser.save();
    }
};
FeeUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(fee_user_schemas_1.FeeUser.name)),
    __param(1, (0, mongoose_1.InjectModel)(fee_schemas_1.Fee.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schemas_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        fee_service_1.FeeService])
], FeeUserService);
exports.FeeUserService = FeeUserService;
//# sourceMappingURL=fee-user.service.js.map