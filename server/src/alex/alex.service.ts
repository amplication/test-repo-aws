import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AlexServiceBase } from "./base/alex.service.base";

@Injectable()
export class AlexService extends AlexServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
