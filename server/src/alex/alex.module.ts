import { Module } from "@nestjs/common";
import { AlexModuleBase } from "./base/alex.module.base";
import { AlexService } from "./alex.service";
import { AlexController } from "./alex.controller";
import { AlexResolver } from "./alex.resolver";

@Module({
  imports: [AlexModuleBase],
  controllers: [AlexController],
  providers: [AlexService, AlexResolver],
  exports: [AlexService],
})
export class AlexModule {}
