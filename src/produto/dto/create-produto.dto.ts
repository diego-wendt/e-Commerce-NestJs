import { ProductCategory } from '../utils/ProductCategory.enum';

export class CreateProdutoDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly category: ProductCategory;
}
