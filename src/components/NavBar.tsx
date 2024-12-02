import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image borderRadius={"1em"} boxSize={"60px"} src={logo} />
      <SearchInput />
      <ColorModeButton
        size={"lg"}
        bg={{ _dark: "gray.800" }}
        marginRight={"3em"}
      />
    </HStack>
  );
};

export default NavBar;
