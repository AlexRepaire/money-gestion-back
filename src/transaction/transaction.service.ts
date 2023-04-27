import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionDto } from 'src/dto/TransactionDto';
import * as moment from 'moment';
import {
  Transaction,
  TransactionDocument,
} from 'src/schemas/transaction.schema';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async addTransaction(addTransaction: TransactionDto): Promise<void> {
    const transaction = new this.transactionModel(addTransaction);
    transaction.save();
  }

  async getAllTransaction(user: any): Promise<Transaction[]> {
    return this.transactionModel.find({
      userId: user.userId,
      date: {
        $gt: moment().subtract(Number(user.frequency), 'd').toDate(),
      },
    });
  }

  async editTransaction(id: string, data: any): Promise<void> {
    await this.transactionModel.findOneAndUpdate({ _id: id }, data);
  }

  async deleteTransaction(transactionId: any): Promise<void> {
    await this.transactionModel.findByIdAndRemove({
      _id: transactionId,
    });
  }
}
