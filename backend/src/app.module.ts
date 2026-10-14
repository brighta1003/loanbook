import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './loans/loans.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LoansModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
