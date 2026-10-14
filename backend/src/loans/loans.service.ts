import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LoansService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const loans = await this.prisma.loan.findMany({
      include: {
        repayments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return loans.map((loan) => {
      const amount = Number(loan.amount);

      const repaidAmount = loan.repayments.reduce(
        (total, repayment) => total + Number(repayment.amount),
        0,
      );

      const remainingAmount = amount - repaidAmount;

      let status = "未還款";

      if (remainingAmount <= 0) {
        status = "已還清";
      } else if (loan.dueDate && loan.dueDate < new Date()) {
        status = "逾期";
      } else if (repaidAmount > 0) {
        status = "部分還款";
      }

      return {
        id: loan.id,
        borrower: loan.borrowerName,
        amount,
        repaidAmount,
        remainingAmount,
        status,
      };
    });
  }

  async findOne(id: number) {
    const loans = await this.findAll();

    return loans.find((loan) => loan.id === id);
  }
}