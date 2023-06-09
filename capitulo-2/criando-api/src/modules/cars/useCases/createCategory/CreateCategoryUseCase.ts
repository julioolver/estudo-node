import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface iRequest {
    name: string;
    description: string;
}

/**
 * [x] Definir o tipo de retorno
 * [x] Alterar o retorno de erro
 * [x] Acessar o repositório
 */
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {
    }

  execute({ name, description }: iRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        throw new Error("Category already Exists")
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
