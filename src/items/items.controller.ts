import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  Body,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { createItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(@Req() req: Request): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return await this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: createItemDto): Promise<Item> {
    // const { name, description, quantity } = item;
    return this.itemsService.create(item);
  }

  @Put(':id')
  update(@Body() data: createItemDto, @Param('id') id): Promise<Item> {
    console.log({ data });
    console.log({ id });
    return this.itemsService.updateOne(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
