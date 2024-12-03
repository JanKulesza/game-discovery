import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";
import useGameQueryStore from "@/strore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearch = useGameQueryStore((s) => s.setSearch);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearch(ref.current.value);
      }}
    >
      <InputGroup w={"100%"} startElement={<LuSearch />}>
        <Input
          ref={ref}
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
          color={{
            _light: "#black",
            _hover: "black",
            _focus: "black",
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
