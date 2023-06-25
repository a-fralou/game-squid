import {
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { SessionTeamsService } from './session-teams.service';

@Controller('session-teams')
export class SessionTeamsController {
  constructor(private readonly sessionTeamsService: SessionTeamsService) {}

  // Fake create two team
  @Post()
  async create(@Res() res: Response) {
    try {
      const teams = await this.sessionTeamsService.create();

      return res.status(HttpStatus.OK).json(teams);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  @Get()
  async findSession(@Res() res: Response) {
    try {
      const sessionGame = await this.sessionTeamsService.findSession();

      return res.status(HttpStatus.OK).json(sessionGame);
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
