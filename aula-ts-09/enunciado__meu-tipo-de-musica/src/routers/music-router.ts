import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "../middleware/validateSchema";
import { musicSchema } from "../schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post(
  "/musics",
  validateSchema(musicSchema),
  musicController.createMusic
);

export default musicRouter;
