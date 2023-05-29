import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUSeCase } from "./ListCategoriesUSeCase";

const categoriesRepository = new CategoriesRepository();
const listCategoiresUseCase = new ListCategoriesUSeCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoiresUseCase
);

export { listCategoriesController };
