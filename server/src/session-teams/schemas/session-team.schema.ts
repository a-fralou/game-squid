import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class SessionTeam {
  @Prop()
  team: string;

  @Prop()
  isWin: boolean;

  @Prop()
  players: [
    {
      playerID: { type: Types.ObjectId; ref: 'Player' };

      isLive: boolean;

      score: number;

      kills: number;

      deaths: number;
    },
  ];
}

export const SessionTeamSchema = SchemaFactory.createForClass(SessionTeam);
