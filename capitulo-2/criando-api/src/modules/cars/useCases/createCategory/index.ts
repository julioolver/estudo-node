import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./createCategoryController";

const createCategoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(createCategoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController, createCategoryUseCase }