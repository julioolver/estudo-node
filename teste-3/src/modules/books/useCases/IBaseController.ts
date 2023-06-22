import { Request, Response } from "express";

interface IBaseController {
  handle(request: Request, response: Response): Response;
}

export { IBaseController };
