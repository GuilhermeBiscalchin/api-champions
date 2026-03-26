import { Request, Response } from "express";
import * as PlayerService from "../service/player-service";

export const getPlayer = async (request: Request, response: Response) => {
  const httpResponse = await PlayerService.getPlayerService();

  response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  //console.log(id)
  const httpResponse = await PlayerService.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body)
};
