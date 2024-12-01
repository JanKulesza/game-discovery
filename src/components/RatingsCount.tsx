import { Button, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
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
      marginTop={1}
      minWidth="2.75em"
      width="fit-content"
      padding={2}
      height="1.2em"
    >
      <Icon boxSize="4">
        <FaPlus />
      </Icon>
      <Text fontSize={14}>{ratings}</Text>
    </Button>
  );
};

export default RatingCounts;
