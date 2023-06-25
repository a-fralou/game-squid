import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionTeamsService } from './session-teams.service';
import { SessionTeamsController } from './session-teams.controller';
import { SessionTeam, SessionTeamSchema } from './schemas/session-team.schema';
import { Player, PlayerSchema } from 'src/players/schemas/players.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SessionTeam.name, schema: SessionTeamSchema },
      { name: Player.name, schema: PlayerSchema },
    ]),
  ],
  controllers: [SessionTeamsController],
  providers: [SessionTeamsService],
})
export class SessionTeamsModule {}
