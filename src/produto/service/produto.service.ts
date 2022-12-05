import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { Produto } from '../entities/produto.entity';
import { v4 as uuidv4 } from 'uuid';
import { ProductCategory } from '../utils/ProductCategory.enum';

@Injectable()
export class ProdutoService {
  produtos: Produto[] = [];

  create(product: CreateProdutoDto) {
    let produto = new Produto();
    produto = {
      ...product,
      available: true,
      id: uuidv4(),
      category: parseInt(ProductCategory[product.category]),
    };
    this.produtos.push(produto);
    return produto;
  }

  findAll() {
    return this.produtos;
  }

  findOne(id: string) {
    const produto = this.produtos.find((prod) => prod.id === id);
    return produto;
  }

  findByCategory(category: string) {
    const productsByCategory = this.produtos.filter(
      (prod) => prod.category === parseInt(ProductCategory[category]),
    );
    return productsByCategory;
  }

  update(id: string, updateProduto: UpdateProdutoDto) {
    const index = this.produtos.findIndex((prod) => prod.id === id);

    this.produtos[index] = {
      ...this.produtos[index],
      ...updateProduto,
      id: this.produtos[index].id,
      category: parseInt(ProductCategory[updateProduto.category]),
    };

    return this.produtos[index];
  }

  remove(id: string) {
    const index = this.produtos.findIndex((produto) => produto.id === id);
    this.produtos.splice(index, 1);
    return;
  }
}
