import { Category } from "../model/Category"

interface iCategoryDTO {
    name: string,
    description: string
}

class CategoriesRepository {
    categories: Category[] = []

    create({ name, description} : iCategoryDTO): void {
        const category = new Category()

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    getAll(): Category[] {
        return this.categories
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find( category => category.name === name);

        return category;
    }
}

export { CategoriesRepository }