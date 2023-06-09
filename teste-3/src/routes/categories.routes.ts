import { Router } from "express";
import { CategoryRepository } from "../modules/books/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/books/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.get("/", (request, response) => {
  return response.json({
    message: "Retornando a lista de categorias",
  });
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });
});

export { categoriesRoutes };
