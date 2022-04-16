import { ProductcountdownService } from './productcountdown.service';
export declare class ProductcountdownController {
    private productcountdownService;
    constructor(productcountdownService: ProductcountdownService);
    getProductCountdowns(): Promise<import("./schemas/productcountdown.schemas").ProductCountDown[]>;
    createCountdown(body: any, req: any): Promise<import("./schemas/productcountdown.schemas").ProductCountDown>;
    checkUserVoted(body: any, req: any): Promise<boolean>;
}
