import { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  VStack,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId: number | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatform();

  if (error) return <Text>{error.message}</Text>;

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
            {selectedPlatformId
              ? platforms?.data.results.find((p) => p.id === selectedPlatformId)
                  ?.name
              : "Select Platform"}
            <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent
          borderRadius={"1em"}
          bg={{ _dark: "#202020" }}
          w={"fit-content"}
          position={"fixed"}
          marginTop={12}
        >
          {platforms?.data.results?.map((p) => (
            <MenuItem
              cursor="pointer"
              key={p.id}
              value={p.slug}
              onClick={() => onSelectPlatform(p.id)}
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
