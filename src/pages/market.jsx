// import Collections from "@components/Collections/Collections";
import {
  Flex,
  Box,
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
  Image,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import Prev from "../assets/images/icon/Prev.png";
import REDAPPLE from "../assets/images/berry/REDAPPLE.png";
import banner from "../assets/images/banner/Frame 1.png";
import itemsImg1 from "../assets/images/items/Frame 4.png";
import itemsImg2 from "../assets/images/items/Frame 5.png";
import itemsImg3 from "../assets/images/items/Frame 28.png";
import itemsImg4 from "../assets/images/items/Frame 29.png";
import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import { MARKET_ADDRESS, MARKET_ABI } from "../web3.config.js";
// const Market = MARKET_ADDRESS;

// const loadData = async () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const contract = new ethers.Contract(MARKET_ADDRESS, MARKET_ABI, provider);
//   const greeting = await contract.getItemList();
//   alert(greeting);
// };
const Market = ({ userContract, berryContract, marketContract, account }) => {
  const [item, setItem] = useState([]);
  const [itemList, setItemList] = useState();
  const [berryBal, setBerryBal] = useState();
  const onClickGetItems = async () => {
    try {
      // const accounts = await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // setAccount(accounts[0]);
      const ItemResult = await marketContract.methods.getItemList().call();
      // const item = [1, 2, 3];
      // const ItemResult = 0;
      // const itemArray = [...item, ItemResult];
      // const itemArray = [...item, ...ItemResult];
      // console.log(itemArray); // [1, 2, 3, 0]
      // console.log(ItemResult);
      // itemArray.push(ItemResult);
      setItem(ItemResult);
      console.log(ItemResult[0].name);

      // await setNickname(userResult.name);
    } catch (error) {
      console.error(error);
    }
  };

  const searchTitle = async (s) => {
    const search = await marketContract.methods.searchKeyword(s).call();
    setItemList(search);
    console.log(search);
  };

  const getBerryBal = async () => {
    const result = await berryContract.balanceAllOf(account);
    console.log("BAL :", result);
  };
  useEffect(() => {
    getBerryBal();
  }, []);
  useEffect(() => {
    onClickGetItems();
  }, []);

  return (
    <>
      <div className="full-h shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] market-background ">
        {/* <img src= alt="" />
         */}
        <div style={{ display: "flex" }}>
          <Image className="market-prev_btn" src={Prev} alt="" />
          <div className="market h-12 bg-slate-300 justify-end">
            <div className=""></div>
            <span className="marketfont absolute top-[calc(50%_-_12px)] left-[calc(50%_-_33.5px)]">
              Market
            </span>
          </div>
        </div>
        <div className="h-20 apple-wrapper">
          <div className="apple">
            <Image className="" src={REDAPPLE} alt="" />
            <div className="apple-balance" style={{ color: "black" }}>
              27
            </div>
          </div>
        </div>
        <InputGroup className="searchBox">
          {/* <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement> */}
          <Input
            type="search"
            placeholder="#HashTag"
            borderRadius={"3xl"}
            position={"relative"}
            backgroundColor={"white"}
            color={"black"}
          />
          <Button
            borderRadius={"2xl"}
            w={"40%"}
            bg={"blue.300"}
            fontSize={"small"}
            position={"absolute"}
            left={"58%"}
            // onClick={loadData}
            onClick={onClickGetItems}
          >
            {" "}
            Search Item{" "}
          </Button>
        </InputGroup>
        <div className="banner">
          <Image src={banner} w={"100%"} className="banner_point" />
        </div>
        <div className="flex item">
          {item ? (
            item.map((tem, i) => {
              return (
                <div key={i}>
                  <Image src={itemsImg1} alt="" />
                  {tem.name}sasas
                </div>
              );
            })
          ) : (
            <div>검색결과가 업습니다!</div>
          )}

          {/* <div>
            <Image src={itemsImg1} alt="" />
          </div> */}
        </div>

        {/* <div>
          <input className=""></input>
        </div> */}
      </div>
      {/* <div className="h-[932px] ">asdfkjasdfsald;f</div> */}
    </>
  );
};

export default Market;

// import React from "react";
// // import PostCard from "@components/molecules/PostCard";
// // import PostCategory from "@components/molecules/PostCategory";
// // import CreatePostModal from "@components/molecules/CreatePostModal";

// import Collections from "@components/Collections/Collections";
// import {
//   Flex,
//   Input,
//   InputGroup,
//   Button,
//   InputLeftElement,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { FaSearch } from "react-icons/fa";
// import { ethers } from "ethers";
// // import contractABI from "./GiveForeverABI.json";

// const contractAddress = "";

// // const loadData = async () => {
// //   const provider = new ethers.providers.Web3Provider(window.ethereum);
// //   const contract = new ethers.Contract(contractAddress, contractABI, provider);
// //   const greeting = await contract.hello();
// //   alert(greeting);
// // };

// export default function market() {
//   // const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Flex
//       width={"100%"}
//       direction={"column"}
//       alignItems={"center"}
//       gap={"20px"}
//       marginTop={"3%"}
//     >
//       <Flex gap={"10px"}>
//         <InputGroup w={"60%"}>
//           <InputLeftElement pointerEvents="none">
//             <FaSearch color="gray.300" />
//           </InputLeftElement>
//           <Input type="search" placeholder="#HashTag" borderRadius={"3xl"} />
//         </InputGroup>
//         <Button
//           borderRadius={"2xl"}
//           w={"40%"}
//           bg={"blue.300"}
//           fontSize={"small"}
//           // onClick={loadData}
//           // onClick={onOpen}
//         >
//           {" "}
//           Search Item{" "}
//         </Button>

//         {/* <CreatePostModal
//         // isOpen={isOpen}
//         // onClose={onClose}
//         // outputcon={outputcon}
//         /> */}
//       </Flex>
//       <Collections />
//       {/* <PostCategory />
//       <PostCard /> */}
//     </Flex>
//   );
// }
