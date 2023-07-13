import express from "express";
import swaggerUi from "swagger-ui-express"
import { router } from "./routes";
import swaggerFile from "./swagger.json"

import "./database"

const app = express();

app.use(express.json());

app.use(router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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
app.listen(3333, () => console.log("entrou aqui 1 2"));
