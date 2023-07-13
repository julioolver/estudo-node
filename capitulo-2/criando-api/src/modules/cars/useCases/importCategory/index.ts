import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportcategoryUseCase } from "./ImportcategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportcategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
