import { Request, Response } from "express";

import { ListCategoriesUSeCase } from "./ListCategoriesUSeCase";
class ListCategoriesController {
  constructor(private listCategoriesUSeCase: ListCategoriesUSeCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUSeCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
