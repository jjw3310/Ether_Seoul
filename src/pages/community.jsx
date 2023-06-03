import React from "react";
import PostCard from "@components/molecules/PostCard";
import PostCategory from "@components/molecules/PostCategory";
import CreatePostModal from "@components/molecules/CreatePostModal";
import { ethers } from "ethers";
import { COM_CONT_ADDRESS, COMMUNITY_ABI } from "../web3.config";
import Web3 from "web3";

import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function Community({ account }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [contract, setContract] = useState(null);

  const [cate, setCate] = useState();

  const [posts, setPosts] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [hashItem, setHashItem] = useState([]);
  const [tag, setTag] = useState();

  useEffect(() => {
    const tmp =
      cate === 3 ? posts : posts.filter((post) => parseInt(post.kind) === cate);
    setSelectedItem(tmp);
  }, [cate]);

  useEffect(() => {
    const tmp =
      cate === ""
        ? posts
        : posts.filter((post) => post.hashtag.includes(hashItem));
    setHashItem(tmp);
  }, []);
  //
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      yourFunction();
    }
  };

  const yourFunction = () => {
    console.log("Entered value:", tag);
  };

  const handleChange = (event) => {
    setTag(event.target.value);
  };
  //
  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     // 엔터를 눌렀을 때 실행할 함수 호출
  //     yourFunction();
  //   }
  // };

  // const yourFunction = () => {
  //   // 실행할 함수의 로직을 작성하세요
  //   console.log("Enter key pressed");
  // };

  const web3 = new Web3(window.ethereum);

  const setPostArr = (post) => {
    const postArr = post[0];
    const UserArr = post[1];
    const likeArr = post[2];
    let rst = [];
    for (let i = 0; i < postArr.length; i++) {
      if (postArr[i].deleteCheck) continue;
      let rstPosts = {};
      rstPosts.id = postArr[i].id;
      rstPosts.content = postArr[i].content;
      rstPosts.myId = postArr[i].myId;
      rstPosts.imgUrl = postArr[i].imgUrl;
      rstPosts.kind = postArr[i].kind;
      rstPosts.updateDate = postArr[i].updateDate;
      rstPosts.writeDate = postArr[i].writeDate;
      rstPosts.writer = postArr[i].writer;
      rstPosts.deleteCheck = postArr[i].deleteCheck;
      rstPosts.hashtag = postArr[i].hashtag;
      rstPosts.userAddr = UserArr[i].addr;
      rstPosts.userImgUrl = UserArr[i].imgUrl;
      rstPosts.userName = UserArr[i].name;
      rstPosts.likeCnt = likeArr[i];

      rst.push(rstPosts);
    }

    setPosts(rst);
    setSelectedItem(rst);
  };

  useEffect(() => {
    const contractCommunity = new web3.eth.Contract(
      COMMUNITY_ABI,
      COM_CONT_ADDRESS
    );

    setContract(contractCommunity);

    const getAllPosts = async () => {
      await contractCommunity.methods
        .getAllPosts()
        .call({ from: account })
        .then((rst) => {
          setPostArr(rst);
        });
    };
    getAllPosts();
  }, []);

  // const signer = provider.getSigner();
  // test용 주소, abi, 컨트랙트 임 (따로 관리할것)

  return (
    <Flex
      width={"393px"}
      direction={"column"}
      alignItems={"center"}
      gap={"20px"}
      marginTop={"3%"}
      bg={"black"}
    >
      <Flex gap={"10px"}>
        <InputGroup w={"60%"}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="#HashTag"
            borderRadius={"3xl"}
            value={inputValue}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
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

        <CreatePostModal
          isOpen={isOpen}
          onClose={onClose}
          contract={contract}
          account={account}
        />
      </Flex>
      <PostCategory cate={cate} setCate={setCate} />
      {/* <PostCard /> */}
      {selectedItem.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </Flex>
  );
}

//onOpen
