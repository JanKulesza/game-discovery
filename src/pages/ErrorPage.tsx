import { Box, Button, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, #2b5876, #4e4376)"
    >
      <VStack gap={6} textAlign="center" color="white" maxW="600px">
        <Image
          src="https://via.placeholder.com/150x150?text=Error" // Replace with your error graphic
          alt="Error"
          borderRadius="full"
          boxSize="150px"
        />
        <Heading size="2xl" color={{ _light: "black", base: "white" }}>
          {isRouteErrorResponse(error)
            ? "404 Page Not Found"
            : "Something Went Wrong!"}
        </Heading>
        <Text fontSize="lg" color={{ _light: "black", base: "white" }}>
          Oops! Something went wrong.
        </Text>
        <Button
          as={Link}
          size="lg"
          bg={{
            _dark: "teal.700",
            _light: "teal.200",
            _hover: { _dark: "teal.500", _light: "teal.300" },
          }}
          color="white"
          _hover={{ bg: "teal.300" }}
          borderRadius="full"
          px={8}
        >
          Go to Home Page
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
