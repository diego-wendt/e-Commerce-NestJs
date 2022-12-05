import { Injectable } from '@nestjs/common';
import { ProdutoService } from 'src/produto/service/produto.service';
import { CreateCarrinhoDto } from '../dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from '../dto/update-carrinho.dto';
import { Carrinho, Item } from '../entities/carrinho.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarrinhoService {
  constructor(private pService: ProdutoService) {}
  private carrinhos: Carrinho[] = [];

  create(newCarrinho: CreateCarrinhoDto) {
    const { products } = newCarrinho;

    const carrinho = new Carrinho();
    carrinho.id = uuidv4();
    carrinho.user = newCarrinho.user;
    carrinho.totalPrice = 0;

    const array: Item[] = [];
    products.map((produto) => {
      const prod = this.pService.findOne(produto.id);
      if (prod) {
        const item: Item = {
          produto: prod,
          quantidade: produto.quantity,
        };
        carrinho.totalPrice =
          carrinho.totalPrice + prod.price * produto.quantity;
        array.push(item);
      }
    });

    carrinho.cesta = { ...array };

    this.carrinhos.push({ ...carrinho });

    return carrinho;
  }

  findOne(id: string) {
    return this.carrinhos.find((carrinho) => carrinho.id === id);
  }

  update(id: number, updateCarrinhoDto: UpdateCarrinhoDto) {
    return `This action updates a #${id} carrinho`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrinho`;
  }
}
