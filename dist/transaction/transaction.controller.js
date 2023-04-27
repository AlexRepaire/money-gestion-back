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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const TransactionDto_1 = require("../dto/TransactionDto");
const transaction_service_1 = require("./transaction.service");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async addTransaction(transaction) {
        try {
            await this.transactionService.addTransaction(transaction);
            return 'transaction ajouté';
        }
        catch (error) {
            return error;
        }
    }
    async getAllTransaction(user) {
        try {
            return await this.transactionService.getAllTransaction(user);
        }
        catch (error) {
            return error;
        }
    }
    async deleteTransaction(id) {
        try {
            return await this.transactionService.deleteTransaction(id);
        }
        catch (error) {
            return error;
        }
    }
    async updateTransaction(id, dataTransaction) {
        try {
            return await this.transactionService.editTransaction(id, dataTransaction);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)('/add-transaction'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TransactionDto_1.TransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "addTransaction", null);
__decorate([
    (0, common_1.Post)('/get-all-transaction'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TransactionDto_1.TransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAllTransaction", null);
__decorate([
    (0, common_1.Delete)('/delete-transaction/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "deleteTransaction", null);
__decorate([
    (0, common_1.Put)('/update-transaction/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        TransactionDto_1.TransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "updateTransaction", null);
TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map