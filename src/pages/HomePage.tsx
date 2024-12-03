import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      bg={{ _dark: "#141414" }}
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <GridItem display={{ lg: "block", base: "none" }}>
        <GenreList />
      </GridItem>
      <GridItem
        id="mainContent"
        area={"main"}
        padding={7}
        position={"relative"}
      >
        <GameHeading />
        <HStack gap={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
