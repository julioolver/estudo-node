import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICrateCategoryDTO,
} from "./IcategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(field: string, value: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICrateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoriesRepository };
