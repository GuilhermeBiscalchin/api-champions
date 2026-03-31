import { Router } from "express";
import * as PlayerController from "./controller/player-controller";
import * as ClubController from "./controller/club-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);

router.post("/players", PlayerController.postPlayer);

router.get("/players/:id", PlayerController.getPlayerById);

router.delete("/players/:id", PlayerController.deletePlayer);

router.patch("/players/:id", PlayerController.updatePlayer);

router.get("/clubs", ClubController.getClub);

export default router;
