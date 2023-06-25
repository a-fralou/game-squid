import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { SessionTeam } from './schemas/session-team.schema';
import { Player } from 'src/players/schemas/players.schema';

@Injectable()
export class SessionTeamsService {
  constructor(
    @InjectModel(SessionTeam.name)
    private readonly sessionTeamModel: Model<SessionTeam>,
    @InjectModel(Player.name)
    private readonly playersModel: Model<Player>,
  ) {}

  async create(): Promise<{
    firstSessionTeam: SessionTeam;
    lastSessionTeam: SessionTeam;
  }> {
    const firstPlayers = await this.playersModel.find().limit(50);
    const lastPlayers = await this.playersModel.find().skip(50).limit(50);

    const firstTeamPlayers = firstPlayers.map((player) => ({
      playerID: player._id,
      isLive: faker.datatype.boolean(),
      score: faker.number.int({ min: 5, max: 10000 }),
      kills: faker.number.int({ min: 5, max: 10000 }),
      deaths: faker.number.int({ min: 5, max: 10000 }),
    }));

    const lastTeamPlayers = lastPlayers.map((player) => ({
      playerID: player._id,
      isLive: faker.datatype.boolean(),
      score: faker.number.int({ min: 5, max: 10000 }),
      kills: faker.number.int({ min: 5, max: 10000 }),
      deaths: faker.number.int({ min: 5, max: 10000 }),
    }));

    const firstDataTeam = {
      team: faker.animal.cat(),
      isWin: true,
      players: firstTeamPlayers,
    };

    const lastDataTeam = {
      team: faker.animal.cat(),
      isWin: false,
      players: lastTeamPlayers,
    };

    const firstSessionTeam = await this.sessionTeamModel.create(firstDataTeam);
    const lastSessionTeam = await this.sessionTeamModel.create(lastDataTeam);

    return { firstSessionTeam, lastSessionTeam };
  }

  async findSession() {
    const sessionGame = await this.sessionTeamModel.aggregate([
      {
        $unwind: '$players',
      },
      {
        $lookup: {
          from: 'players',
          localField: 'players.playerID',
          foreignField: '_id',
          as: 'players.player',
        },
      },
      {
        $unwind: '$players.player',
      },
      {
        $group: {
          _id: '$_id',
          team: { $first: '$team' },
          isWin: { $first: '$isWin' },
          players: { $push: '$players' },
        },
      },
      {
        $sort: { team: 1 },
      },
    ]);

    if (!sessionGame) {
      throw new NotFoundException('Session game not found');
    }

    return sessionGame;
  }
}
