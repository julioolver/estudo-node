import { Router } from "express"
import { listCategoriesController } from "../modules/books/useCases/listCategories"
import { createCategoryController } from "../modules/books/useCases/createCategory";

const categoriesRoutes = Router()

//list all categories
categoriesRoutes.get("/", (request, response) => {
    listCategoriesController.handle(request, response);
})

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

export { categoriesRoutes }