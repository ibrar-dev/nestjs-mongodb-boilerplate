import { HttpStatus } from '@nestjs/common';

export interface ErrorResponse {
  statusCode: HttpStatus;
  message: string;
  [key: string]: any;
}
