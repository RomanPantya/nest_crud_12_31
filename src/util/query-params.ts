import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class QueryParams {
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(10)
  @Transform(({ value }) => +value)
      limit = 10;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(10)
  @Transform(({ value }) => +value)
      skip = 0;
}