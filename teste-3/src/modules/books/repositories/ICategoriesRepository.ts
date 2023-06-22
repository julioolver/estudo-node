import { Category } from "../model/Category";

interface ICategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    getAll(): Category[];
    create({name, description}: ICategoryDTO): void;
    findByname(name: string): Category | undefined
}

export { ICategoriesRepository, ICategoryDTO };
