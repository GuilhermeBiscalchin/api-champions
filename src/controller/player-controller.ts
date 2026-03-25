import express, { Request, Response } from "express";
import { getPlayerService } from "../service/player-service";


export const getPlayer = async (request: Request, response: Response) => {
  const httpResponse = await getPlayerService();
 

  response.status(httpResponse.statusCode).json(httpResponse.body);
};
