import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from './dto/error-response';

@Catch()
export class GlobalExceptionFilter<T> implements ExceptionFilter<T> {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    console.log('ee')
    this.logger.error(exception);
    if (exception instanceof HttpException) {
      return this.catchHttpException(exception, host);
    }

    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const errorResponse: ErrorResponse = {
      statusCode: status,
      message: 'Something went wrong',
      ...exception,
    };
    console.log("<<<<", errorResponse)
    return response.status(status).json(errorResponse);
  }

  private catchHttpException(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const errorResponseDetails = exception.getResponse();
    const errorDetail =
      typeof errorResponseDetails === 'object'
        ? errorResponseDetails
        : { detail: errorResponseDetails };

    const errorResponse: ErrorResponse = {
      statusCode: status,
      message: exception.message,
      ...errorDetail,
    };
    console.log('<<<', errorResponse)
    response.status(status).json(errorResponse);
  }
}





