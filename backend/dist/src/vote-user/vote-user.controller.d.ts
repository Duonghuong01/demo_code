import { VoteUserService } from './vote-user.service';
export declare class VoteUserController {
    private voteuserService;
    constructor(voteuserService: VoteUserService);
    find(): Promise<(import("./schemas/vote-user.schemas").VoteUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(req: any): Promise<(import("./schemas/vote-user.schemas").VoteUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
