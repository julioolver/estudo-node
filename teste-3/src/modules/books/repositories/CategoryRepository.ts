import { Category } from "../model/Category";
import { ICategoryDTO, ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create({ name, description }: ICategoryDTO): void {
        throw new Error("Method not implemented.");
    }

}

export { CategoryRepository }