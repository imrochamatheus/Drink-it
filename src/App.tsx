import Showcase from "./components/Showcase";
import WithSubnavigation from "./components/Nav";
import DrinkModal from "./components/DrinkModal";

function App() {
  return (
    <>
      <WithSubnavigation />
      <Showcase />
      <DrinkModal />
    </>
  );
}

export default App;
