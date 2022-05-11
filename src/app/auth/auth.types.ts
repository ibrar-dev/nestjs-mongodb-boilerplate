import { Request } from 'express';

export interface IAuthenticatedUserPayload {
  id: number;
  userName: string;
}

export interface IAuthenticatedUserRequest extends Request {
  user: IAuthenticatedUserPayload;
}

export interface ICheckSlackCodeResult {
  slack?: { userId: string };
}
