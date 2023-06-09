import { Category } from "../model/Category";

interface iCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  create({ name, description }: iCategoryDTO): void;
  findByName(name: string) : Category | undefined;
}

export { ICategoriesRepository, iCategoryDTO };
