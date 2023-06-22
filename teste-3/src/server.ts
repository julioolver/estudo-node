import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({
    message: "rodou a aplicação",
  });
});

app.use(routes);



app.listen(3333);
