import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let message: string = exception.message;
    try {
      message = exception.getResponse()?.message;
    } catch (e) {}
    let status = 500;
    try {
      status = exception.getStatus();
    } catch {
      status = 500;
    }
    const data: any = {
      timestamp: Date.now(),
      path: request.url,
      msg: message,
    };

    if (process.env.NODE_ENV !== 'production') {
      data.error = exception;
    }

    response.status(status).json(data);
  }
}
