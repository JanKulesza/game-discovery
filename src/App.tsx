import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [selectedGenreId, setGenreId] = useState<number | null>(null);

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
            console.log(genreId);

            setGenreId(genreId);
          }}
        />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenreId={selectedGenreId} />
      </GridItem>
    </Grid>
  );
}

export default App;
