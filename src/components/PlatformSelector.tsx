import { Platform } from "@/entities/Platform";
import useLookUp from "@/hooks/useLookup";
import usePlatform from "@/hooks/usePlatforms";
import { bgColorSecondary } from "@/services/constants";
import useGameQueryStore from "@/strore";
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

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatform();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform =
    platformId && platforms
      ? useLookUp<Platform>(platformId, platforms.results)
      : null;

  if (error) return <Text>{error.message}</Text>;

  return (
    <MenuRoot>
      <VStack>
        <MenuTrigger asChild>
          <Button
            borderRadius={"0.5em"}
            bg={bgColorSecondary}
            color={{ _dark: "white", _light: "black" }}
            variant="outline"
            size="md"
          >
            {selectedPlatform?.name || "Select Platform"}
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
          {platforms?.results?.map((p) => (
            <MenuItem
              cursor="pointer"
              key={p.id}
              value={p.slug}
              bg={{ _hover: { _dark: "teal.700", _light: "teal.300" } }}
              borderRadius={"0.5em"}
              onClick={() => setPlatformId(p.id)}
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
