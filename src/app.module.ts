import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './api/comments/comments.module';
import { ForumsModule } from './api/forums/forums.module';
import { RepliesModule } from './api/replies/replies.module';
import { ormConfig } from './configs/ormconfig';


@Module({
  imports: [
    ForumsModule,
    CommentsModule,
    RepliesModule,
    TypeOrmModule.forRoot(ormConfig)
  ],
})
export class AppModule {}
