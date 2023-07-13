import { Response, Request } from "express";
import { ImportcategoryUseCase } from "./ImportcategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportcategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
