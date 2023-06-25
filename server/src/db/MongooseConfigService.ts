import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb+srv://faleaksey:cqDRyPsO22adr3F7@cluster0.qqoh8fi.mongodb.net/?retryWrites=true&w=majority',
      dbName: 'squid-game',
    };
  }
}
