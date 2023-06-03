import { Box, Button, Flex, Image } from "@chakra-ui/react";
import maze from "@assets/images/maze.png";
import logo from "@assets/images/Fore-Fi.png";
import { BtnText } from "./atoms/Buttons";
import { yellowColor } from "./atoms/Colors";
import { useEffect, useRef } from "react";

const Intro = () => {
  const mazeRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveMazeUp();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const moveMazeUp = () => {
    const mazeImage = mazeRef.current;

    if (mazeImage) {
      const currentPosition = parseFloat(mazeImage.style.top) || 0;
      const moveAmount = 10; // 원하는 이동 거리

      mazeImage.style.top = `${currentPosition - moveAmount}px`;
    }
  };

  return (
    <Flex
      overflow="hidden"
      direction="column"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      position="relative"
    >
      <Box>
        <Box
          ref={mazeRef}
          id="maze-image"
          height="500px"
          width="75vw"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={"0"}
        >
          <Image height="100%" width="100%" src={maze} objectFit="none" />
        </Box>
        <Image src={logo} zIndex={"10"} />
      </Box>
      <Button bgColor="yellow" fontSize="24px" px="30px" mt="20px">
        Play
      </Button>
    </Flex>
  );
};
export default Intro;
