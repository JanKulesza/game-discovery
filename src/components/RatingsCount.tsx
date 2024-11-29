import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface Props {
  ratingsCount: number;
}

const RatingCounts = ({ ratingsCount }: Props) => {
  const [ratings, setRatings] = useState(ratingsCount);
  return (
    <Button
      onClick={() => setRatings(ratings + 1)}
      bg={{ _dark: "#373737", _hover: "white" }}
      color={{ _dark: "white", _hover: "#373737" }}
      transition="0.5s"
      border="none"
      w={15}
      h={3}
    >
      <FaPlus fontSize={8} />
      <Text fontSize={14}>{ratings}</Text>
    </Button>
  );
};

export default RatingCounts;
