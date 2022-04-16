/// <reference types="multer" />
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./schemas/user.schemas").User[]>;
    register(createUserDto: CreateUserDto): Promise<import("./schemas/user.schemas").User>;
    verifyUser(confirmationCode: string): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    changePassword(req: any, body: any): Promise<void>;
    forgotPassword(body: any): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    verifyPassword(body: any): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    checkBeforePassword(confirmationCode: string): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateUser(file: Express.Multer.File, body: any, req: any): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    roleUser(body: any): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
