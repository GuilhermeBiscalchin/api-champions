import express, { Request, Response } from "express";

function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", (request: Request, response: Response) => {
    response.status(200).json({ player: "Messi" });
  });
  return app;
}

export default createApp;
