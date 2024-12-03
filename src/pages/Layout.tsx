import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      bg={{ _dark: "#181414", _light: "white" }}
      minHeight="100vh"
      padding={"20px"}
    >
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
