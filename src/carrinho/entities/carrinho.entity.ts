import { Produto } from 'src/produto/entities/produto.entity';

export class Carrinho {
  id: string;
  user: string;
  totalPrice: number;
  cesta: Item[];
}

export class Item {
  produto: Produto;
  quantidade: number;
}
