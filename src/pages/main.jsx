import { Box, Flex } from "@chakra-ui/react";
import TreeBox from "@components/molecules/TreeBox";
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
      if (treeContract) {
        const resultTree = await treeContract.methods
          .getBalanceOfUnmintedTree(account)
          .call();
        console.log("resultTree : ", resultTree);
        await setMyTrees(resultTree);
        const mintedTree = await treeContract.methods.balanceOf(account).call();
        console.log("mintedTree :", mintedTree);
        await setMyTrees(...mintedTree);
      }
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
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
