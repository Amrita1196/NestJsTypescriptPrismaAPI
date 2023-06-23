import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { BlockchainController } from './blockchain/blockchain.controller';

@Module({
  imports: [],
  controllers: [AppController, BlockchainController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
