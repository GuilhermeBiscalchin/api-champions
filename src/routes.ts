import { Router } from "express";
import { getPlayer } from "./controller/player-controller";

const router = Router()

router.get("/players",getPlayer)

export default router