"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const fee_user_schemas_1 = require("../fee-user/schemas/fee-user.schemas");
const user_schemas_1 = require("../user/schemas/user.schemas");
const fee_controller_1 = require("./fee.controller");
const fee_service_1 = require("./fee.service");
const fee_schemas_1 = require("./schemas/fee.schemas");
let FeeModule = class FeeModule {
};
FeeModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: fee_schemas_1.Fee.name, schema: fee_schemas_1.FeeSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: fee_user_schemas_1.FeeUser.name, schema: fee_user_schemas_1.FeeUserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: user_schemas_1.User.name, schema: user_schemas_1.UserSchema }])
        ],
        controllers: [fee_controller_1.FeeController],
        providers: [fee_service_1.FeeService]
    })
], FeeModule);
exports.FeeModule = FeeModule;
//# sourceMappingURL=fee.module.js.map