import { Category } from "../model/Category";

interface ICrateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
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

    this.categories.push(category)
  }
}

export { CategoriesRepository };