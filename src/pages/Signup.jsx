import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { ArrowLeft } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Flex justifyContent={"center"} mt={5}>
      <Box className="back" bg={"white"} p={2}>
        <Link to={'/'}><ArrowLeft /></Link>
      </Box>
      <Box bg={"white"} p={10} borderRadius={40}>
        <Text bg={"white"} fontSize={30}>
          Welcome 👋 <br /> Fresh Man Student
        </Text>
        <FormControl bg={"white"} pt={2}>
          <Flex py={6} gap={2}>
            <Input width={200} type="text" placeholder="Firstname" />
            <Input width={200} type="text" placeholder="Lastname" />
          </Flex>
          <Flex pb={6} gap={2}>
            <Input width={200} type="email" placeholder="me@gmail.com" />
            <Input width={200} type="number" placeholder="+234 90_" />
          </Flex>
          <Flex pb={6} gap={2}>
            <Input width={200} type="text" placeholder="Matric No" />
            <Input width={200} type="text" placeholder="Department" />
          </Flex>
          <Flex pb={6} gap={2}>
            <Input width={200} type="text" placeholder="Gender" />
            <Input width={200} type="text" placeholder="Hobby" />
          </Flex>

          <Flex className="btn" gap={2} py={2}>
            <Button bg={"black"} color={"white"} width={"100%"}
            _hover={'none'}
            type="reset"
            fontWeight={300}>
              Clear
            </Button>
            <Button
              bg={"linear-gradient(45deg, darkorange, tomato)"}
              width={"100%"}
              _hover={'none'}
              type="submit"
              fontWeight={300}
            >
              Sign Up
            </Button>
          </Flex>
          <Text textAlign={"center"} py={2}>
            <Link to={'/login'}>Already have an account? Sign In</Link>
          </Text>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Signup;
