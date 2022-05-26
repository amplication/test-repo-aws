import { AlexWhereInput } from "./AlexWhereInput";
import { AlexOrderByInput } from "./AlexOrderByInput";

export type AlexFindManyArgs = {
  where?: AlexWhereInput;
  orderBy?: Array<AlexOrderByInput>;
  skip?: number;
  take?: number;
};
