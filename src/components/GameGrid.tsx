import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <ul>
      {games.map((game) => (
        <li>{game.name}</li>
      ))}
      ;
    </ul>
  );
};

export default GameGrid;
