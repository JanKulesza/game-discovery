import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { bgColorSecondary } from "@/services/constants";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} bg={{ _dark: "#181414" }}>
      <Text
        marginX={{ mdDown: 1, base: 10, lg: 10 }}
        color={{ _dark: "teal.700", _light: "teal.300" }}
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
