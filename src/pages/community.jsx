import React from "react";
import PostCard from "@components/molecules/PostCard";
import PostCategory from "@components/molecules/PostCategory";
import CreatePostModal from "@components/molecules/CreatePostModal";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
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
export default function Community({ account }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [contract, setContract] = useState(null);
  const [posts, setPosts] = useState([]);
  // test용 주소, abi, 컨트랙트 임 (따로 관리할것)

  //const [events, setEvents] = useState([]); ==> 추후 이벤트 쓸지 정할것

  // useEffect(() => {
  //   // 컨트랙트 객체 초기화
  //   const initializeContract = async () => {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum); // ethers.js Provider 생성

  //       const contractAddress = "CONTRACT_ADDRESS"; // TODO : 커뮤니티 컨트랙트 주소 불러오기(contract 정보 파일)
  //       const contractABI = [{ tmp: true }]; // TODO : 커뮤니티 컨트랙트 ABI 불러오기(contract 정보 파일 생성)

  //       // 컨트랙트 인스턴스 생성
  //       const contract = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         provider.getSigner(account)
  //       );
  //       console.log(account);
  //       // 컨트랙트 객체 상태 업데이트
  //       setContract(contract);

  //       // 이벤트 구독
  //       // contract.on("rewardEco", (param1, param2) => {
  //       //   // 이벤트 발생 시 동작할 로직 작성
  //       //   console.log("Event MyEvent received:", param1, param2);

  //       //   // 이벤트 추가
  //       //   setEvents((prevEvents) => [...prevEvents, { param1, param2 }]);
  //       // });
  //     } catch (error) {
  //       console.error("Error initializing contract:", error);
  //     }
  //   };

  //   initializeContract();
  // }, []);
  console.log(account);
  const initializeContract = async () => {};
  return (
    <Flex
      width={"393px"}
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
          onClick={onOpen}
        >
          {" "}
          Create Post{" "}
        </Button>

        <CreatePostModal isOpen={isOpen} onClose={onClose} />
      </Flex>
      <PostCategory />
      <PostCard />
    </Flex>
  );
}
