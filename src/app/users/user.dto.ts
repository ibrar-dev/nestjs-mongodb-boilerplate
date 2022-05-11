import {
    IsUUID,
    IsNumber,
    IsOptional,
    IsString,
    MinLength,
    IsBoolean,
  } from 'class-validator';
  
  export class UserDto {
  @IsString()
  name: string;

  @IsString()
  wallet_address: string;  

  @IsBoolean()
  is_active: boolean;
}