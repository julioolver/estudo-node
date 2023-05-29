import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByField("name", name);

  if (categoryAlreadyExists) {
    return response.status(400).json({
      message: "Category Already Exists.",
    });
  }

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/all", (request, response) => {
  const categories = categoryRepository.list();

  return response.json(categories);
});

export { categoriesRoutes };
