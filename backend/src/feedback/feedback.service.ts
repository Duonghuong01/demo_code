import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback, FeedbackDocument } from './schemas/feedback.schemas';
import nodemailer = require("nodemailer");
import { User, UserDocument } from 'src/user/schemas/user.schemas';

@Injectable()
export class FeedbackService {
    constructor(@InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async findAll() {
        return this.feedbackModel.find().populate("createdBy","fullName email","User");
    }

    async create(content, userId) {
        let user = await this.userModel.findById(userId);
        this.sendEmailForFeedback(user.fullName, user.email);
        let feedBack = await new this.feedbackModel({ content, createdBy: userId });
        return feedBack.save()
    }

    async sendEmailForFeedback(name: string, email: string) {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'zenominhhoang@gmail.com',
                pass: 'Dalecarnegie521985',
            }
        })
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

}
