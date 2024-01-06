import { app } from "./app"

const port = process.env.PORT || 3000;

const start = () => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

start();



