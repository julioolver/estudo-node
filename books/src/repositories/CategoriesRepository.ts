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

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByField(field: string, value: string): Category | undefined {
    const categoryKey = field as keyof Category;

    return this.categories.find((category) => category[categoryKey] === value);
  }
}

export { CategoriesRepository };
