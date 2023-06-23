import { Controller, Get, Post, Put, Delete, Body, Param ,ParseIntPipe} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Blockchain,Prisma } from '@prisma/client';

@Controller('blockchain')

export class BlockchainController {
    constructor(private readonly prisma: PrismaService) {}

    @Get()
    async findAll(): Promise<Blockchain[]> {
      return await this.prisma.blockchain.findMany();
    }

  
    @Post()
    async create(@Body() data: Prisma.BlockchainCreateInput): Promise<Blockchain> {
      return await this.prisma.blockchain.create({ data });
    }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.BlockchainUpdateInput,
  ): Promise<Blockchain> {
    return await this.prisma.blockchain.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Blockchain> {
    return await this.prisma.blockchain.delete({
      where: { id },
    });
  }
}
