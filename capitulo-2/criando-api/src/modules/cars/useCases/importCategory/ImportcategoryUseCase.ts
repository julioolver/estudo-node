import fs from "fs";
import { parse } from "csv-parse";
import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportcategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      const existsCategory = this.categoriesRepository.findByName(name);

      if (!existsCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      //paraseFile
      const parseFile = parse();

      // pipe: temos o arquivo stream, e a cada pedaço lido o pipe joga para algum local.
      // pega todos os pedaços lidos e faz alguma ação, e o pipe repassa o pedaço lido para a ação que desejamos fazer
      stream.pipe(parseFile);
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);

          resolve(categories);
        });
    });
  }
}

export { ImportcategoryUseCase };
