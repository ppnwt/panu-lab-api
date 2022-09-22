import { Body, Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import { CreateArticlesDto } from './create-articles.dto';

@Controller('articles')
export class ArticlesController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createArticlesDto: CreateArticlesDto) {
    return 'This is add new articles';
  }

  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'This is all articles';
  }
}
