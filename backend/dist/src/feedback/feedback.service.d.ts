import { Model } from 'mongoose';
import { Feedback, FeedbackDocument } from './schemas/feedback.schemas';
import { UserDocument } from 'src/user/schemas/user.schemas';
export declare class FeedbackService {
    private feedbackModel;
    private userModel;
    constructor(feedbackModel: Model<FeedbackDocument>, userModel: Model<UserDocument>);
    findAll(): Promise<(Feedback & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(content: any, userId: any): Promise<Feedback & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    sendEmailForFeedback(name: string, email: string): Promise<void>;
    delete(feedbackId: any): Promise<Feedback & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
