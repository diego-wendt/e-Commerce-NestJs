import { Module } from '@nestjs/common';
import { CarrinhoService } from './service/carrinho.service';
import { CarrinhoController } from './controller/carrinho.controller';
import { ProdutoService } from 'src/produto/service/produto.service';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService, ProdutoService],
})
export class CarrinhoModule {}
