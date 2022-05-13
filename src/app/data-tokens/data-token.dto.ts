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
  description: string;  

  @IsString()
  image: string;

  @IsString()
  properties: string; 

  @IsString()
  is_explicit: boolean;

  @IsString()
  is_active: boolean;  

  @IsString()
  blockchain: string;

  @IsString()
  wallet_address: string; 

  @IsString()
  category_id: string; 

}