import * as PlayerRepostory from "../repositories/player-repositories";
import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepostory.findAllPlayers();

  let responseCode = null;

  if (data) {
    responseCode = await ok(data);
  } else {
    responseCode = await noContent(data);
  }

  return responseCode;
};
