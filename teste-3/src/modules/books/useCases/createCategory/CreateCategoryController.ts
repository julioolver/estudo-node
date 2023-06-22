import { Request, Response } from "express";
import { IBaseController } from "../IBaseController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController implements IBaseController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({name, description});

        return response.status(201).send();
    }
}

export { CreateCategoryController };