import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { bgColorSecondary } from "@/services/constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} bg={{ _dark: "#181414" }}>
      <Text
        as={Link}
        marginX={{ mdDown: 1, base: 10, lg: 10 }}
        fontSize={46}
        fontWeight={"bold"}
        minW={"142px"}
      >
        D I S C
      </Text>
      <SearchInput />
      <ColorModeButton
        size={"lg"}
        bg={bgColorSecondary}
        marginRight={{ base: "3em", mdDown: "1px" }}
      />
    </HStack>
  );
};

export default NavBar;
