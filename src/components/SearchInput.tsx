import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";

const SearchInput = () => {
  return (
    <InputGroup w={"80%"} startElement={<LuSearch />}>
      <Input
        h={12}
        bg={{
          _dark: "#403c3c",
          _light: "#f4f4f5",
          _hover: "white",
          _focus: "white",
        }}
        transition={"0.3s"}
        borderRadius={20}
        placeholder="Search Games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
