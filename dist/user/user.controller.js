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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const UserLoginDto_1 = require("../dto/UserLoginDto");
const userRegisterDto_1 = require("../dto/userRegisterDto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(findUserDto, res) {
        try {
            const result = await this.userService.login(findUserDto);
            if (result) {
                res.status(common_1.HttpStatus.ACCEPTED).json(result);
            }
            else {
                throw "identifiant incorrect ou le compte n'existe pas";
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async register(createUserDto, res) {
        try {
            const exist = await this.userService.findUser(createUserDto.mail);
            if (exist) {
                throw "L'utilisateur existe déjà";
            }
            const result = await this.userService.register(createUserDto);
            if (result) {
                res.status(common_1.HttpStatus.CREATED).json(result);
            }
            else {
                throw "Erreur à l'inscription";
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserLoginDto_1.UserLoginDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userRegisterDto_1.UserRegisterDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map