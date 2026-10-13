import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
    private readonly loans = [
        {
        id: 1,
        borrower: '小明',
        amount: 5000,
        status: '逾期',
        },
        {
        id: 2,
        borrower: '小華',
        amount: 8000,
        status: '部分還款',
        },
        {
        id: 3,
        borrower: '小美',
        amount: 3000,
        status: '已還清',
        },
    ];

    findAll() {
        return this.loans;
    }

    findOne(id: number) {
        return this.loans.find((load) => load.id === id);
    }
}
