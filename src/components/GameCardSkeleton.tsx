import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root
      minHeight="fit-content"
      w="350px"
      borderRadius="20px"
      bg={{ _dark: "#202020" }}
      border="none"
      overflow="hidden"
      paddingBottom={35}
    >
      <Skeleton height={250} marginBottom={5} />
      <SkeletonText noOfLines={2} gap="1" marginBottom={1} marginX={3} />
    </Card.Root>
  );
};

export default GameCardSkeleton;
