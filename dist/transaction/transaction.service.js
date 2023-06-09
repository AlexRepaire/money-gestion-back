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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const moment = require("moment");
const transaction_schema_1 = require("../schemas/transaction.schema");
let TransactionService = class TransactionService {
    constructor(transactionModel) {
        this.transactionModel = transactionModel;
    }
    async addTransaction(addTransaction) {
        const transaction = new this.transactionModel(addTransaction);
        transaction.save();
    }
    async getAllTransaction(user) {
        return this.transactionModel.find({
            userId: user.userId,
            date: {
                $gt: moment().subtract(Number(user.frequency), 'd').toDate(),
            },
        });
    }
    async editTransaction(id, data) {
        await this.transactionModel.findOneAndUpdate({ _id: id }, data);
    }
    async deleteTransaction(transactionId) {
        await this.transactionModel.findByIdAndRemove({
            _id: transactionId,
        });
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transaction_schema_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map