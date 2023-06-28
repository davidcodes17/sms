import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent={'center'} gap={10} fontSize={12}>
            <a href="#">buy a course</a>
            <a href="#">success</a>
            <a href="#">scholarship programs</a>
            <a href="#">pricing</a>
      </Flex>
    </Box>
  );
};

export default Navbar;
