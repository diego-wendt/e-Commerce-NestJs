export class CreateCarrinhoDto {
  user: string;
  products: [{ id: string; quantity: number }];
}
