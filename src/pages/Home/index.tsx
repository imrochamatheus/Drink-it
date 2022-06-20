import { Box } from "@chakra-ui/react";
import { FC } from "react";

import DrinkModal from "../../components/DrinkModal";
import WithSubnavigation from "../../components/Nav";
import SearchArea from "../../components/SearchArea";
import Showcase from "../../components/Showcase";

const Home: FC<any> = () => {
  return (
    <Box minH={"100vh"} bg="white.500">
      <WithSubnavigation />
      <SearchArea />
      <Showcase />
      <DrinkModal />
    </Box>
  );
};

export default Home;
