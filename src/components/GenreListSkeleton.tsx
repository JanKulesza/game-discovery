import { HStack } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "./ui/skeleton";

const GenreListSkeleton = () => {
  return (
    <HStack padding={1} w="100%" h="100%">
      <SkeletonCircle size={10} />
      <SkeletonText noOfLines={1} w={140} />
    </HStack>
  );
};

export default GenreListSkeleton;
