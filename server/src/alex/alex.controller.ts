import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AlexService } from "./alex.service";
import { AlexControllerBase } from "./base/alex.controller.base";

@swagger.ApiTags("alexes")
@common.Controller("alexes")
export class AlexController extends AlexControllerBase {
  constructor(
    protected readonly service: AlexService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
