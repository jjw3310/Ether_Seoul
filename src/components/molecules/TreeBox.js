import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { mainGreenColor, yellowColor } from "@components/atoms/Colors";
import React, { useEffect, useState } from "react";
import GREENTREE1 from "@assets/images/tree/GREENTREE1.png";
import { sub2GreenColor } from "@components/atoms/Colors";
import axios from "axios";

export default function TreeBox({
  account,
  tokenId,
  userContract,
  treeContract,
}) {
  const [treeInfo, setTreeInfo] = useState();
  const [result, setResult] = useState();
  const [balance, setBalance] = useState();
  const [currentTokenId, setCurrentTokenId] = useState(tokenId);

  useEffect(() => {
    if (!treeContract) return;
    const getTreeInfo = async () => {
      const resultInfo = await treeContract.methods.getTreeInfo(tokenId).call();
      const result = await axios.get(resultInfo.metadataUri);
      setResult(result.data.properties.image.description);
      setTreeInfo(resultInfo);
    };
    getTreeInfo();
  }, [treeContract]);

  const harvestBtnClick = async () => {
    const hResult = userContract.methods
      .harvest(currentTokenId)
      .send({ from: account });
    console.log(hResult);
    setBalance(balance.paserInt() + hResult);
  };

  const growBtnClick = async () => {
    let gResult;
    if (treeInfo.level < 5) {
      gResult = await userContract.methods
        .growUnmintedTree(currentTokenId)
        .send({ from: account });
      setCurrentTokenId(currentTokenId + 1);
    } else {
      gResult = await userContract.methods
        .growMintedTree(currentTokenId)
        .send({ from: account });
    }
    const getTreeInfo = async (_tokenId) => {
      const resultInfo = await treeContract.methods
        .getTreeInfo(_tokenId)
        .call();
      const result = await axios.get(resultInfo.metadataUri);
      await setResult(result.data.properties.image.description);
      await setTreeInfo(resultInfo);
    };
    if (gResult) {
      await getTreeInfo(currentTokenId);
    }
  };

  const mintBtnClick = async () => {
    const mResult = await treeContract.methods
      .mintTree(account, currentTokenId)
      .send({ from: account });
    console.log(mResult);
  };

  useEffect(() => {
    const getTreeInfo = async (_tokenId) => {
      const resultInfo = await treeContract.methods
        .getTreeInfo(_tokenId)
        .call();
      const result = await axios.get(resultInfo.metadataUri);
      await setResult(result.data.properties.image.description);
      await setTreeInfo(resultInfo);
    };
    getTreeInfo(currentTokenId);
  }, [currentTokenId]);

  return (
    <Flex justifyContent={"center"} alignSelf={"flex-end"} mt={"69px"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"348px"}
        height={"200px"}
        bgColor={sub2GreenColor}
        borderTopLeftRadius={"50px"}
        borderBottomLeftRadius={"50px"}
      >
        <Flex direction={"row"}>
          <Flex width={"65px"} mr={"33px"}>
            <Image objectFit={"contain"} src={result ? result : ""} />
          </Flex>
          <Flex direction={"column"}>
            <Flex direction={"row"}>
              <Text fontSize={"20px"}>{treeInfo ? treeInfo.name : ""}</Text>
              <Flex ml={"5px"} alignItems={"flex-end"}>
                <Text fontSize={"12px"} color={yellowColor}>
                  {treeInfo ? `LV.${treeInfo.level}` : ""}
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"row"}>
              <Box mb={"35px"}>
                <Text fontSize={"12px"}>
                  {currentTokenId >= 1000
                    ? `#${currentTokenId}`
                    : "Unminted Tree"}
                </Text>
              </Box>
            </Flex>
            {treeInfo ? (
              treeInfo.level === "5" && currentTokenId < 1000 ? (
                <Box>
                  <Button
                    onClick={mintBtnClick}
                    width={"70px"}
                    height={"30px"}
                    bgColor={mainGreenColor}
                    isDisabled={treeInfo ? false : true}
                  >
                    Mint
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Flex direction={"row"} fontSize={"12px"} gap={"11px"}>
                    <Button
                      onClick={harvestBtnClick}
                      width={"70px"}
                      height={"30px"}
                      bgColor={mainGreenColor}
                      isDisabled={treeInfo ? false : true}
                    >
                      Harvest
                    </Button>
                    <Button
                      onClick={growBtnClick}
                      width={"70px"}
                      height={"30px"}
                      bgColor={yellowColor}
                      isDisabled={treeInfo ? false : true}
                    >
                      Grow
                    </Button>
                  </Flex>
                </Box>
              )
            ) : (
              "treeInfo is Loading"
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
