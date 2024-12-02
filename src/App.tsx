import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId: number | null;
  platform: Platform | null;
  sortOrder: string;
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
        <HStack gap={5} position={"relative"} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatformName={
              gameQuery.platform ? gameQuery.platform.name : null
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
