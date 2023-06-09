import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o Repository
 */

class CreateCategoryService {

    constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName("name", name);

    if (categoryAlreadyExists) {
        throw new Error("Category Already Exists.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
