import {
  Controller,
  Post,
  Patch,
  Param,
  HttpStatus,
  Res,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Response } from 'express';
import { faker } from '@faker-js/faker';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  // Fake insert data players
  @Post()
  async create(@Res() res: Response) {
    try {
      const fakeDataPlayers: CreatePlayerDto[] = [];

      const createRandomPlayer = () => ({
        name: faker.person.firstName(),
        photo: faker.image.avatar(),
      });

      Array.from({ length: 100 }).forEach(() => {
        fakeDataPlayers.push(createRandomPlayer());
      });

      const players = await this.playersService.create(fakeDataPlayers);

      return res.status(HttpStatus.OK).json(players);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  @Patch('add-friend/:id')
  async addToFriend(@Param('id') id: string, @Res() res: Response) {
    try {
      const player = await this.playersService.addToFriend(id);

      return res.status(HttpStatus.OK).json(player);
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
