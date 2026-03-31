import { ClubModel } from "../model/Club-Model";

const database = [
    {
        id:1,
        name:"Real Madrid"
    }
]

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};