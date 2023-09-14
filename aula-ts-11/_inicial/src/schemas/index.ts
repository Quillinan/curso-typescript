import Joi, { Schema } from "joi";
import { Game } from "../protocols/game-protocol";

export const gameSchema: Schema = Joi.object<Game>({
  title: Joi.string().required(),
  platform: Joi.string().required(),
});
