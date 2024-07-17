import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api", apiRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
