import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSubmit: (search: string) => void;
}

const NavBar = ({ onSubmit }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <Text
        marginLeft={{ sm: 5, base: 10, lg: 10 }}
        fontSize={36}
        fontWeight={"bold"}
        minW={"115px"}
      >
        D I S C
      </Text>
      <SearchInput onSubmit={onSubmit} />
      <ColorModeButton
        size={"lg"}
        bg={{ _dark: "gray.800" }}
        marginRight={"3em"}
      />
    </HStack>
  );
};

export default NavBar;
