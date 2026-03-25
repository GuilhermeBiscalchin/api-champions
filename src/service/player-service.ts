import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = { player: "Rivaldo" };

  let responseCode = null;

  if (data) {
    responseCode = await ok(data);
  } else {
    responseCode = await noContent(data);
  }

  return responseCode;
};
