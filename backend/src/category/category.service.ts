import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schemas';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }

  async findAll() {
    return this.categoryModel.find();
  }

  async create(title: string) {
    let category = new this.categoryModel({ title });
    return category.save();
  }


  async update(categoryId, title: string) {
    let category = await this.categoryModel.findById(categoryId);
    category.title = title;
    return category.save();
  }

  async delete(categoryId) {
    let category = await this.categoryModel.findById(categoryId);
    return category.remove();
  }
}
