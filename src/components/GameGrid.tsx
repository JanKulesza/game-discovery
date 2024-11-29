import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { data, error } = useGames();

  return (
    <ul>
      {data.map((game) => (
        <li>{game.name}</li>
      ))}
      ;
    </ul>
  );
};

export default GameGrid;
