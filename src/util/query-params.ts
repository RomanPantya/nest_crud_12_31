import { IsNumberString, IsOptional } from 'class-validator';

export class QueryParams {
  @IsNumberString({default: '10'})
  @IsOptional()
      limit?: number;
  @IsNumberString({default: '0'})
  @IsOptional()
      skip?: number;
}