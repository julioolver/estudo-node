import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

type IRequest = {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const exists = this.categoriesRepository.findByname(name);

        if (exists) {
            throw new Error("Category already exists");
        }

        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase };