import db from "../database";
import { Game } from "../protocols/game-protocol";
import { QueryResult } from "pg";

const games: Game[] = [];

async function getGames(): Promise<Game[]> {
  return db
    .query("SELECT * FROM games")
    .then((result: QueryResult) => result.rows);
}

async function createGame(game: Game): Promise<void> {
  const { title, platform } = game;
  const query = "INSERT INTO games (title, platform) VALUES ($1, $2)";
  return db.query(query, [title, platform]).then(() => {});
}

async function getGameByTitleAndPlatform(game: Game): Promise<Game | null> {
  const { title, platform } = game;
  const query = "SELECT * FROM games WHERE title = $1 AND platform = $2";
  return db.query(query, [title, platform]).then((result: QueryResult) => {
    const gameData = result.rows[0];
    return gameData || null;
  });
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
