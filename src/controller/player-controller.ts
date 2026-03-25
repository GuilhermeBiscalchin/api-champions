import express, { Request, Response } from "express";
import { getPlayerService } from "../service/player-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (request: Request, response: Response) => {
  const data = await getPlayerService();
  const responseCode = await ok(data);

  response.status(responseCode.statusCode).json(responseCode.body);
};
