import express, { json, Request, Response } from "express";


const app = express();
const PORT = process.env.PORT

app.use(json())

app.get("/", (request: Request, response: Response) => {
  response.status(200).json({player: "Ronaldo"});
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
