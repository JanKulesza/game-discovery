import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box bg="#181414" minHeight="100vh" padding={"20px"}>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
