import { Category } from "../../model/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categoires: Category[];
    private static STANCE: CategoriesRepository
    constructor() {
        this.categoires = []
    }

    public static getInstance(): CategoriesRepository {
        if (!this.STANCE) {
            this.STANCE = new CategoriesRepository();
        }
        return this.STANCE;
    }

    findByname(name: string): Category | undefined {
        return this.categoires.find( category => category.name === name);
    }
    create({ name, description }: ICategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categoires.push(category)

        console.log(this.categoires);
        
    }

    getAll(): Category[] {
        return this.categoires
        
    }
}

export { CategoriesRepository };
