import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarrinhoService } from '../service/carrinho.service';
import { CreateCarrinhoDto } from '../dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from '../dto/update-carrinho.dto';
import { findCarrinhoDto } from '../dto/find-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post()
  create(@Body() carrinho: CreateCarrinhoDto) {
    return this.carrinhoService.create(carrinho);
  }

  @Get(':id')
  findOne(@Param() param: findCarrinhoDto) {
    return this.carrinhoService.findOne(param.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarrinhoDto: UpdateCarrinhoDto,
  ) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrinhoService.remove(+id);
  }
}
