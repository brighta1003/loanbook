import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) {}

    @Get()
    findAll() {
        return this.loansService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        const loan = this.loansService.findOne(id);

        if(!loan) {
            throw new NotFoundException('Loan not found');
        }

        return loan;
    }
}
