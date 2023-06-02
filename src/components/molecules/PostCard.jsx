import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Radio,
  RadioGroup,
  useRadio,
  useRadioGroup,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Heading,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaRegThumbsUp,
  FaRegCommentAlt,
  FaEllipsisV,
  FaRegShareSquare,
} from "react-icons/fa";

export default function PostCard() {
  const content = `With Chakra UI, I wanted to sync the speed of development with the
    speed of design. I wanted the developer to be just as excited as the
    designer to create a screen.`;
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Card maxW="md" bg={"white.500"} w={"99%"}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<FaEllipsisV />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          {showFullContent ? content : content.substr(0, 100)}
          {content.length > 100 && (
            <Button
              variant="link"
              colorScheme={"facebook"}
              fontStyle={"bold"}
              onClick={toggleContent}
            >
              {showFullContent ? "닫기" : "... 더보기"}
            </Button>
          )}
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://i.seadn.io/gcs/files/7698f508dcb916208e253c7d677dfa9e.png?auto=format&dpr=1&w=1000"
        alt="Chakra UI"
      />

      <CardFooter
        justify="center"
        flexWrap="wrap"
        padding={"0%"}

        // sx={{
        //   "& > button": {
        //     minW: "136px",
        //   },
        // }}
      >
        <Flex w={"100%"}>
          {" "}
          <Button flex="1" variant="ghost" leftIcon={<FaRegThumbsUp />}>
            5
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<FaRegCommentAlt />}>
            1
          </Button>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<FaRegShareSquare />}
          ></Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}
