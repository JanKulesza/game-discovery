import { Container, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

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
      <GridItem padding={"5px"} area={"nav"} bg={{ _dark: "gray.900" }}>
        <NavBar />
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
