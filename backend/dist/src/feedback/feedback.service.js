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
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const feedback_schemas_1 = require("./schemas/feedback.schemas");
const nodemailer = require("nodemailer");
const user_schemas_1 = require("../user/schemas/user.schemas");
let FeedbackService = class FeedbackService {
    constructor(feedbackModel, userModel) {
        this.feedbackModel = feedbackModel;
        this.userModel = userModel;
    }
    async findAll() {
        return this.feedbackModel.find().populate("createdBy", "fullName email", "User");
    }
    async create(content, userId) {
        let user = await this.userModel.findById(userId);
        this.sendEmailForFeedback(user.fullName, user.email);
        let feedBack = await new this.feedbackModel({ content, createdBy: userId });
        return feedBack.save();
    }
    async sendEmailForFeedback(name, email) {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'zenominhhoang@gmail.com',
                pass: 'Dalecarnegie521985',
            }
        });
        transport.sendMail({
            from: 'zenominhhoang@gmail.com',
            to: email,
            subject: "Phản hồi",
            html: `<h1>Phản hồi của bạn đã được ghi nhận</h1>
                <h2>Hello ${name}</h2>
                <p>Chúng tôi xin cảm ơn bạn. Chúng tôi sẽ xem xét và liên lạc với bạn lại sớm.</p></div>`,
        }).catch(err => console.log(err));
    }
    async delete(feedbackId) {
        let feedBack = await this.feedbackModel.findById(feedbackId);
        return feedBack.remove();
    }
};
FeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(feedback_schemas_1.Feedback.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schemas_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], FeedbackService);
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=feedback.service.js.map