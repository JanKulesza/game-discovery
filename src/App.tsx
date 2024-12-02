import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenreId, setGenreId] = useState<number | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
            setGenreId(genreId);
          }}
          selectedGenreId={selectedGenreId}
        />
      </GridItem>
      <GridItem area={"main"} padding={7}>
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatformName={selectedPlatform ? selectedPlatform.name : null}
        />
        <GameGrid
          selectedPlatformId={selectedPlatform ? selectedPlatform.id : null}
          selectedGenreId={selectedGenreId}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
