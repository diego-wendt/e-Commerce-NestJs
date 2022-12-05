import { ProductCategory } from '../utils/ProductCategory.enum';

export class Produto {
  id: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  category: ProductCategory;
}
