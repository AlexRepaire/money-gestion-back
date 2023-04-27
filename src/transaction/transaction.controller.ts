import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TransactionDto } from 'src/dto/TransactionDto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('/add-transaction')
  async addTransaction(@Body() transaction: TransactionDto) {
    try {
      await this.transactionService.addTransaction(transaction);
      return 'transaction ajouté';
    } catch (error) {
      return error;
    }
  }

  @Post('/get-all-transaction')
  async getAllTransaction(@Body() user: TransactionDto) {
    try {
      return await this.transactionService.getAllTransaction(user);
    } catch (error) {
      return error;
    }
  }

  @Delete('/delete-transaction/:id')
  async deleteTransaction(@Param('id') id: string) {
    try {
      return await this.transactionService.deleteTransaction(id);
    } catch (error) {
      return error;
    }
  }

  @Put('/update-transaction/:id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() dataTransaction: TransactionDto,
  ) {
    try {
      return await this.transactionService.editTransaction(id, dataTransaction);
    } catch (error) {
      return error;
    }
  }
}
