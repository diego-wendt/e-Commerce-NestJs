import { Module } from '@nestjs/common';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ProdutoModule, CarrinhoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
