import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, Facebook, Google } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Flex justifyContent={"center"} mt={"100px"}>
       <Box className="back" bg={"white"} p={2}>
        <Link to={'/'}><ArrowLeft /></Link>
      </Box>
      <Box
        bg={"white"}
        p={10}
        borderRadius={30}
        boxShadow={"0px 2px 10px #f2f2f2"}
      >
        <FormControl isRequired display={"block !important"} className="box">
          <Text bg={"white"} fontSize={30}>
            Welcome back <br />
            User 👋
          </Text>
          <Input
            type="text"
            width={300}
            my={4}
            name="matric no"
            placeholder="R2022/620/001"
          />
          <Input
            type="password"
            width={300}
            my={4}
            name="password"
            placeholder="*************"
          />
          <Button
            width={"100%"}
            fontWeight={300}
            borderRadius={40}
            bg={"linear-gradient(45deg, tomato, darkorange)"}
            _hover={"none"}
            color={"white"}
            type="submit"
          >
            Sign In
          </Button>
          {/* <Text bg={"white"} textAlign={"center"} py={2}>
            Sign In with{" "}
          </Text> */}
          {/* <Flex
            className="google"
            bg={"white"}
            justifyContent={"center"}
            gap={5}
            pb={2}
          >
            <Flex
              bg={"none"}
              cursor={"pointer"}
              border={"1.4px solid"}
              borderRadius={20}
              py={1}
              px={3}
              alignItems={"center"}
              gap={2}
            >
              <Image bg={"none"} width={"20%"} src="google.svg" />
              <Text bg={"none"}>Google</Text>
            </Flex>
            <Flex
              bg={"none"}
              cursor={"pointer"}
              border={"1.4px solid"}
              borderRadius={20}
              py={1}
              px={3}
              alignItems={"center"}
              gap={2}
            >
              <Image bg={"none"} width={"30%"} src="apple.svg" />
              <Text bg={"none"}>Apple </Text>
            </Flex>
          </Flex> */}
          <Text bg={"none"} textAlign={'center'} pt={2}>
            <Link to={'/signup'}>Don't have an account? SignUp</Link>
          </Text>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Signin;
