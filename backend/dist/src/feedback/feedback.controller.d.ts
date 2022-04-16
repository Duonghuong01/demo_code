/// <reference types="mongoose" />
import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private feedbackService;
    constructor(feedbackService: FeedbackService);
    getFeedback(): Promise<(import("./schemas/feedback.schemas").Feedback & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createFeedback(body: any, req: any): Promise<import("./schemas/feedback.schemas").Feedback & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: any): Promise<import("./schemas/feedback.schemas").Feedback & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
