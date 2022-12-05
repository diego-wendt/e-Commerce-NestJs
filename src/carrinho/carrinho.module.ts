import { Module } from '@nestjs/common';
import { CarrinhoService } from './service/carrinho.service';
import { CarrinhoController } from './controller/carrinho.controller';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule {}
