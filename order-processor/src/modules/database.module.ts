import {Global, Module} from "@nestjs/common";
import {providers} from "../domain/dbConnect";

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}