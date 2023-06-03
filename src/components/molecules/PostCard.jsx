import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Button,
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
import { FaRegThumbsUp, FaEllipsisV, FaRegShareSquare } from "react-icons/fa";

export default function PostCard({ post }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Card maxW="md" bg={"white.500"} w={"99%"}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={post.userName} src={post.userImgUrl} />

            <Box>
              <Heading size="sm">{post.userName}</Heading>
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
          {showFullContent ? post.content : post.content.substr(0, 100)}
          {post.content.length > 100 && (
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
        src={"https://ipfs.io/ipfs/" + post.imgUrl[0]}
        alt="Chakra UI"
      />

      <CardFooter
        justify="center"
        flexWrap="wrap"
        padding={"0%"}
        // }}
      >
        <Flex w={"100%"}>
          {" "}
          <Button flex="1" variant="ghost" leftIcon={<FaRegThumbsUp />}>
            {post.likeCnt}
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
