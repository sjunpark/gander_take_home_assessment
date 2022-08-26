import express, { Request, Response, Application } from "express";
import path from "path";

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/sum", (req: Request, res: Response): void => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.query);
  try {
    const sum = Number(req.query.num1) + Number(req.query.num2);
    res.json({ sum });
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 http://localhost:${PORT}`);
});
