import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genreId: number | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      bg={{ _dark: "#141414" }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem padding={"5px"} area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem display={{ lg: "block", base: "none" }}>
        <GenreList
          onSelectGenre={(genreId) => {
            setGameQuery({ ...gameQuery, genreId });
          }}
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem area={"main"} padding={7}>
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatformName={
            gameQuery.platform ? gameQuery.platform.name : null
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
