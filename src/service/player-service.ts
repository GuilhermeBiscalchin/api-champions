import * as PlayerRepostory from "../repositories/player-repositories";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepostory.findAllPlayers();

  let responseCode = null;

  if (data) {
    responseCode = await HttpResponse.ok(data);
  } else {
    responseCode = await HttpResponse.noContent();
  }

  return responseCode;
};


export const getPlayerByIdService = async (id:number) => {
  const data = await PlayerRepostory.findPlayerById(id)

  let response = null

  if(data){
    response = await HttpResponse.ok(data)
  }else{
    response = await HttpResponse.noContent()
  }

  return response
}