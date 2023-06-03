import { Flex, Img, Box } from "@chakra-ui/react";
import React from "react";
import tree from "@assets/images/waterDropTree.svg";
import { BtnMetamask, BtnText } from "@components/atoms/Buttons";
import { useNavigate } from "react-router-dom";

export default function LoginForm({
  account,
  setAccount,
  setNickname,
  userContract,
}) {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      const userResult = await userContract.methods.getUser(accounts[0]).call();
      console.log(userResult);
      if (userResult.addr === "0x0000000000000000000000000000000000000000") {
        // Do Nothing
      } else {
        await setNickname(userResult.name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const navigateToPurchase = () => {
    navigate("https://metamask.app.link/dapp/ether-seoul.vercel.app/");
  };

  if (window.ethereum) {
    handleEthereum();
  } else {
    window.addEventListener("ethereum#initialized", handleEthereum, {
      once: true,
    });

    // If the event is not dispatched by the end of the timeout,
    // the user probably doesn't have MetaMask installed.
    setTimeout(handleEthereum, 3000); // 3 seconds
  }

  function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      console.log("Ethereum successfully detected!");
      // Access the decentralized web!
      navigateToPurchase();
    } else {
      console.log("Please install MetaMask!");
    }
  }
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      height={"100%"}
      width={"100vw"}
    >
      <Box>
        <Flex
          direction={"column"}
          alignItems={"center"}
          gap={"20px"}
          justifyContent={"center"}
        >
          <Img src={tree} height={"250px"} mb={"80px"} />
          <BtnMetamask text="Sign in with Metamask" onClick={onClickAccount} />
          <BtnText text="Metamask is not installed?" />
        </Flex>
      </Box>
    </Flex>
  );
}
