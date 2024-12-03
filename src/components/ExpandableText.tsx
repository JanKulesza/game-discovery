import { bgColorSecondary } from "@/services/constants";
import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text marginTop={10}>
      {summary}
      <Button
        borderRadius={"0.5em"}
        bg={bgColorSecondary}
        fontWeight={"bold"}
        fontSize={14}
        marginLeft={1}
        color={{ _dark: "white", _light: "black" }}
        size={"xs"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
