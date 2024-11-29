import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image borderRadius={"1em"} boxSize={"60px"} src={logo} />
      <Text>NavBar</Text>
      <ColorModeButton bg={{ _dark: "gray.800" }} />
    </HStack>
  );
};

export default NavBar;
