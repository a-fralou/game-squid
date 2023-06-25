import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Player {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop({ default: false })
  isFriend: boolean;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
