import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Get()
  async getCategory() {
    return this.categoryService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async addCategory(@Body() body) {
    return this.categoryService.create(body.title)
  }

  @UseGuards(JwtAuthGuard)
  @Post('edit/:categoryId')
  async editCategory(@Param('categoryId') categoryId, @Body() body) {
    return this.categoryService.update(categoryId, body.title)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:categoryId')
  async deleteCategory(@Param('categoryId') categoryId) {
    return this.categoryService.delete(categoryId)
  }
}
