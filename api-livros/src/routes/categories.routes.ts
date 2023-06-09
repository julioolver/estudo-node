import { Router } from "express";
import { CategoriesRepository } from "../modules/books/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/books/services/CreateCategoryService";

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.get("/list", (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRouter };
