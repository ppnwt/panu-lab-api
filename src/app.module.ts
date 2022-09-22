import { Module } from '@nestjs/common';
import { ArticlesController } from './controller/articles.controller';
// import { AppService } from './app.service';

@Module({
  // imports: [],
  controllers: [ArticlesController],
  // providers: [AppService],
})
export class AppModule {}
