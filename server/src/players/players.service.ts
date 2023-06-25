import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from './schemas/players.schema';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<Player>,
  ) {}

  async create(playersDTO: CreatePlayerDto[]): Promise<Player[]> {
    const newPlayers = await this.playerModel.insertMany(playersDTO);

    return newPlayers;
  }

  async addToFriend(id: string): Promise<Player> {
    const updatedUser = await this.playerModel.findByIdAndUpdate(id, {
      isFriend: true,
    });

    if (!updatedUser) {
      throw new NotFoundException('Player not found');
    }

    return updatedUser;
  }
}
