import { Flex, Img, Box } from "@chakra-ui/react";
import React from "react";
import tree from "@assets/images/waterDropTree.svg";
import { BtnMetamask, BtnText } from "@components/atoms/Buttons";

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
      await setNickname(userResult.name);
    } catch (error) {
      console.error(error);
    }
  };
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
