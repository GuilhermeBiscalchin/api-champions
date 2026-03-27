import { Request, Response } from "express";
import * as PlayerService from "../service/player-service";
import { badRequest } from "../utils/http-helper";

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


export const postPlayer = async(req:Request,res:Response) => {
const bodyValue = req.body
const httpResponse = await PlayerService.createPlayerService(bodyValue)
//console.log(bodyValue)

if(httpResponse){
  res.status(httpResponse.statusCode).json(httpResponse.body)
}else{
  const response =await badRequest()
  res.status(response.statusCode).json(response.body)
}

}