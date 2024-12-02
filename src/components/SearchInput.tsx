import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";

interface Props {
  onSubmit: (search: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSubmit(ref.current.value);
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
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
