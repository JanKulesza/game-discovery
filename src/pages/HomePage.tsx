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
      <GridItem w={"224px"} display={{ lg: "block", base: "none" }}>
        <GenreList />
      </GridItem>
      <GridItem
        id="mainContent"
        area={"main"}
        padding={7}
        position={"relative"}
        w={{
          xl: "calc(100vw - 224px - 40px - 40px)",
          lgTo2xl: "calc(100vw - 224px - 40px - 40px)",
        }}
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
