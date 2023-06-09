import { Category } from "../model/Category";
interface ICrateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(field: string, value: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICrateCategoryDTO): void;
}

export { ICategoriesRepository, ICrateCategoryDTO };
