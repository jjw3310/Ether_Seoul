import { Box, Flex } from "@chakra-ui/react";
import { useWeb3 } from "@hooks/useWallet";
import { useEffect, useState } from "react";
import MyPage from "./myPage";

export default function Main({ account }) {
  ///////////////////////////////////////////////////////////////
  //////////////////////// GET CONTRACTS ////////////////////////
  ///////////////////////////////////////////////////////////////
  const { berryContract, treeContract, userContract, getContracts } = useWeb3();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isloading) return;
    getContracts();
    if (userContract) setIsLoading(false);
  }, [getContracts]);
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  const [user, setUser] = useState();
  const [myTrees, setMyTrees] = useState();

  useEffect(
    () => async () => {
      if (!userContract) return;
      if (!account) return;
      // console.log(treeContract);
      if (userContract) {
        const resultUser = await userContract.methods.getUser(account).call();
        setUser(resultUser);
      }
      // if (treeContract) {
      //   const resultTree = await treeContract.methods
      //     .getBalanceOfUnmintedTree(account)
      //     .call();
      //   console.log("resultTree!! : ", resultTree);
      //   setMyTrees(resultTree);
      //   const mintedTree = await treeContract.methods.balanceOf(account).call();
      //   if (mintedTree) {
      //     try {
      //       setMyTrees(resultTree.push(mintedTree));
      //     } catch {
      //       let arr = [...resultTree, ...mintedTree];
      //       setMyTrees(arr);
      //     }
      //     console.log("mintedTree :", mintedTree);
      //     console.log("COMBINED : ", [...resultTree, mintedTree]);
      //     // console.log("COMBINED : ", [...myTrees,...mintedTree);
      //     setMyTrees([...resultTree, mintedTree]);
      //   }
      // }
    },
    [userContract]
  );

  ///////////////////////////////////////////////////////////////

  return (
    <>
      {isloading ? (
        "Main Page Loading..."
      ) : (
        <Flex>
          <Box w={"100%"}>
            <MyPage
              account={account}
              userContract={userContract}
              treeContract={treeContract}
              berryContract={berryContract}
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
