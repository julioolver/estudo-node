import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import { router } from "./routes";
const app = express();

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
  response.json({
    message: "hello WOrd",
  });
});

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({
    name,
  });
});
app.listen(3333, () => console.log("entrou aqui 2"));
