import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        <Navbar />
        <Text>
          <Link to={'/login'}>Sign In</Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
