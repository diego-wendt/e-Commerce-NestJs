import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from '../service/produto.service';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { Produto } from '../entities/produto.entity';
import { FindProductDTO } from '../dto/find-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto): Produto {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  findAll(): Produto[] {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindProductDTO): Produto {
    return this.produtoService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: FindProductDTO,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ): Produto {
    return this.produtoService.update(params.id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param() params: FindProductDTO) {
    return this.produtoService.remove(params.id);
  }
}
