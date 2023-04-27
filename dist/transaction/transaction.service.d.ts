import { Model } from 'mongoose';
import { TransactionDto } from 'src/dto/TransactionDto';
import { Transaction, TransactionDocument } from 'src/schemas/transaction.schema';
export declare class TransactionService {
    private transactionModel;
    constructor(transactionModel: Model<TransactionDocument>);
    addTransaction(addTransaction: TransactionDto): Promise<void>;
    getAllTransaction(user: any): Promise<Transaction[]>;
    editTransaction(id: String, data: any): Promise<void>;
    deleteTransaction(transactionId: any): Promise<void>;
}
