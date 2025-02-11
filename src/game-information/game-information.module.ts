import { Module } from '@nestjs/common';
import { GameInformationController } from './game-information.controller';
import { GameInformationService } from './game-information.service';

@Module({
  controllers: [GameInformationController],
  providers: [GameInformationService]
})
export class GameInformationModule {}
