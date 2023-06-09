import { Category } from "../model/Category";

interface ICategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    list(): Category[];
    create({ name, description }: ICategoryDTO): void;
}

export { ICategoryRepository, ICategoryDTO };
