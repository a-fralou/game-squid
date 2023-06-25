import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './db/MongooseConfigService';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { SessionTeamsModule } from './session-teams/session-teams.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
    PlayersModule,
    SessionTeamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
