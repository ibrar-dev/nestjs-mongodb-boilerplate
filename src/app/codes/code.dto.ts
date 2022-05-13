import {
    IsUUID,
    IsNumber,
    IsOptional,
    IsString,
    MinLength,
    IsBoolean,
  } from 'class-validator';
  
  export class CodeDto {
  @IsString()
  name: string;

  @IsString()
  type: string;  

}