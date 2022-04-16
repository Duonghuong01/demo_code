/// <reference types="mongoose" />
import { CountdownService } from './countdown.service';
export declare class CountdownController {
    private countdownService;
    constructor(countdownService: CountdownService);
    getCountdowns(): Promise<import("./schemas/countdown.schemas").CountDown[]>;
    getCountdownsByDate(): Promise<(import("./schemas/countdown.schemas").CountDown & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getDetail(id: any): Promise<{
        total: number;
        countdown: import("./schemas/countdown.schemas").CountDown & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        products: (import("../productcountdown/schemas/productcountdown.schemas").ProductCountDown & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    createCountdown(body: any): Promise<import("./schemas/countdown.schemas").CountDown>;
    updateCountdown(id: any, body: any): Promise<import("./schemas/countdown.schemas").CountDown>;
    removeCountdown(id: any): Promise<import("./schemas/countdown.schemas").CountDown>;
}
