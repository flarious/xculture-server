import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './api/comments/comments.module';
import { ForumsModule } from './api/forums/forums.module';
import { ormConfig } from './configs/ormconfig';


@Module({
  imports: [
    ForumsModule,
    CommentsModule,
    TypeOrmModule.forRoot(ormConfig)
  ],
})
export class AppModule {}
