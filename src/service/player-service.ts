import { PlayerModel } from "../model/Player-Model";
import { statisticsModel } from "../model/static-model";
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

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepostory.findPlayerById(id);

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  //verifica se está vazio
  let response = null;

  if (Object.keys(player).length !== 0) {
    //console.log(player)
    await PlayerRepostory.insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepostory.deleteOnePlayer(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deletado" });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: statisticsModel,
) => {
  const data = await PlayerRepostory.findAndModifyPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.ok(data);
  }

  return response;
};
