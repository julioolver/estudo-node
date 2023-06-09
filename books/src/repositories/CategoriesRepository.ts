import { Category } from "../model/Category";
import { ICategoriesRepository, ICrateCategoryDTO } from "./IcategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICrateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      date: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(field: string, value: string): Category | undefined {
    const categoryKey = field as keyof Category;

    return this.categories.find((category) => category[categoryKey] === value);
  }
}

export { CategoriesRepository };
