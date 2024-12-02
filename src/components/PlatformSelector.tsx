import { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformName: string | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformName,
}: Props) => {
  const { data: platforms, error } = usePlatform();

  return (
    <MenuRoot>
      <VStack>
        <MenuTrigger asChild>
          <Button
            bg={{ _dark: "#202020", _light: "#f4f4f5" }}
            color={{ _dark: "white", _light: "black" }}
            variant="outline"
            size="md"
          >
            {selectedPlatformName ? selectedPlatformName : "Select Platform"}
            <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent
          borderRadius={"1em"}
          bg={{ _dark: "#202020" }}
          w={"fit-content"}
          position={"absolute"}
          top={12}
        >
          {platforms.map((p) => (
            <MenuItem
              cursor="pointer"
              key={p.id}
              value={p.slug}
              onClick={() => onSelectPlatform(p)}
            >
              {p.name}
            </MenuItem>
          ))}
        </MenuContent>
      </VStack>
    </MenuRoot>
  );
};

export default PlatformSelector;
