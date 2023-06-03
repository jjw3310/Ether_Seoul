import React from "react";
import PostCard from "@components/molecules/PostCard";
import PostCategory from "@components/molecules/PostCategory";
import CreatePostModal from "@components/molecules/CreatePostModal";
import {
  Flex,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { ethers } from "ethers";
// import contractABI from "./GiveForeverABI.json";

const contractAddress = "";

const loadData = async () => {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const contract = new ethers.Contract(contractAddress, contractABI, provider);
  // const greeting = await contract.hello();
  // alert(greeting);
};

export default function market() {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      width={"100%"}
      direction={"column"}
      alignItems={"center"}
      gap={"20px"}
      marginTop={"3%"}
    >
      <Flex gap={"10px"}>
        <InputGroup w={"60%"}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="#HashTag" borderRadius={"3xl"} />
        </InputGroup>
        <Button
          borderRadius={"2xl"}
          w={"40%"}
          bg={"blue.300"}
          fontSize={"small"}
          onClick={loadData}
          // onClick={onOpen}
        >
          {" "}
          Search Item{" "}
        </Button>

        <CreatePostModal
        // isOpen={isOpen}
        // onClose={onClose}
        // outputcon={outputcon}
        />
      </Flex>
      <PostCategory />
      <PostCard />
    </Flex>
  );
}
