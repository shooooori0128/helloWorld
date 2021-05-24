import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response): void => {
  const message: string = req.query.message || req.body.message || 'Hello world!!!';

  res.status(200).send(message);
}