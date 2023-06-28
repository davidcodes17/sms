import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Box className="left">
          <Text>world class education</Text>
          <Heading fontFamily={'Poppins'} fontWeight={900} py={1} fontSize={50}>Become <br /> a professional in <br /> any field</Heading>
          <Text fontSize={10}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi <br />
            nostrum, error, reiciendis inventore perferendis impedit placeat at <br />
            ab consectetur nam quibusdam maiores temporibus porro? <br /> Voluptatibus
            suscipit dicta minima debitis?
          </Text>
          <Flex className="btns" gap={5} py={2}>
            <Button bg={"linear-gradient(45deg,tomato,darkorange)"} color={"white"} fontWeight={300}>
              Get Started
            </Button>
            <Button fontWeight={300} bg={'white'}>Learn More</Button>
          </Flex>
        </Box>
        <Box className="right" width={400}>
            <Image src="/lady.png" width={'100%'} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
