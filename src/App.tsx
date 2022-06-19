import Showcase from "./components/Showcase";
import WithSubnavigation from "./components/Nav";
import DrinkModal from "./components/DrinkModal";
import SearchArea from "./components/SearchArea";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box minH={"100vh"} bg="white.500">
      <WithSubnavigation />
      <SearchArea />
      <Showcase />
      <DrinkModal />
    </Box>
  );
}

export default App;
