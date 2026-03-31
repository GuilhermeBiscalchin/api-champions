import * as HttpResponse from "../utils/http-helper";
import * as ClubRepostory from "../repositories/club-repositories";

export const getClubService = async () => {
  const data = await ClubRepostory.findAllClubs();

  let responseCode = null;

  if (data) {
    responseCode = await HttpResponse.ok(data);
  } else {
    responseCode = await HttpResponse.noContent();
  }

  return responseCode;
};
