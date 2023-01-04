import { UserEntity, UserEntityKeys } from "src/entities/user.entity";
import { IsOptional, IsArray , IsIn} from "class-validator";

export class UserSelectDto {
  @IsOptional()
  @IsArray()
  @IsIn(UserEntityKeys, { each: true })
      select: (keyof UserEntity)[] = [];
}
