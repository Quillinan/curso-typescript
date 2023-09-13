interface Game {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string | Date;
}

const game: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14", // Pode ser um Date ou uma string. É opcional.
};

const games: Game[] = [game];

function play(game: Game): void {
  // Executa o jogo
  console.log(game);
}
