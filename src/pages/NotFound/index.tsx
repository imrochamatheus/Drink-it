import { FC } from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Lootie from "../../components/Lottie";
import * as notFound from "../../assets/looties/not-found.json";

const NotFound: FC<{}> = () => {
  return (
    <Box h="100vh">
      <Lootie animationData={notFound} width={500} />
      <Center>
        <Heading
          fontWeight={400}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          maxW={"3xl"}
        >
          Not Found
        </Heading>
      </Center>
    </Box>
  );
};

export default NotFound;
