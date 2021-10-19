import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    return await this.itemModel.create(item);
  }

  async updateOne(id: string, newItem: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, newItem, { new: true });
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id, { new: true });
  }
}
