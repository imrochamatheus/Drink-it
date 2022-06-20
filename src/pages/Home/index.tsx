import { Box } from "@chakra-ui/react";
import { FC } from "react";
import DrinkDrawer from "../../components/DrinkDrawer";
import LettersFilter from "../../components/LettersFilter";
import WithSubnavigation from "../../components/Nav";
import SearchArea from "../../components/SearchArea";
import Showcase from "../../components/Showcase";

const Home: FC<any> = () => {
  return (
    <Box minH={"100vh"} bg="white.500">
      <WithSubnavigation />
      <SearchArea />
      <LettersFilter />
      <Showcase />
      <DrinkDrawer />
    </Box>
  );
};

export default Home;
