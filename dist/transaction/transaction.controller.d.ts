import { TransactionDto } from 'src/dto/TransactionDto';
import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    addTransaction(transaction: TransactionDto): Promise<any>;
    getAllTransaction(user: TransactionDto): Promise<any>;
    deleteTransaction(id: String): Promise<any>;
    updateTransaction(id: String, dataTransaction: TransactionDto): Promise<any>;
}
