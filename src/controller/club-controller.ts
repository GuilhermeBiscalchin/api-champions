import { Request, Response } from "express";
import * as ClubService from "../service/club-service";

export const getClub = async (request: Request, response: Response) => {
  const httpResponse = await ClubService.getClubService();

  response.status(httpResponse.statusCode).json(httpResponse.body);
};
