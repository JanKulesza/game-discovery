import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      m={0}
      w={"calc(100vw)"}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <GridItem display={{ lg: "block", base: "none" }} bg={"black"}>
        Aside
      </GridItem>
      <GridItem area={"main"} bg={"blue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
