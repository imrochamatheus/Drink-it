import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Lottie from "react-lottie";
// import * as animationData from "../../assets/looties/drink-loader.json";

interface LoaderProps {
  height?: number;
  width?: number;
  animationData: any;
}

const Lootie: FC<LoaderProps> = ({ height, width, animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box mt={-2}>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={false}
        isPaused={false}
      />
    </Box>
  );
};

export default Lootie;
