import React, { useEffect, useState } from "react";
import TreeBox from "@components/molecules/TreeBox";
import { Flex } from "@chakra-ui/react";

export default function MyPage({ account, userContract, treeContract }) {
  const [isloading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const [myTrees, setMyTrees] = useState();

  useEffect(() => {
    if (!userContract) return;
    const setter = async () => {
      if (userContract) {
        const resultUser = await userContract.methods.getUser(account).call();
        setUser(resultUser);
      }
      if (treeContract) {
        const resultTree = await treeContract.methods
          .getBalanceOfUnmintedTree(account)
          .call();
        setMyTrees(resultTree);

        const cnt = await treeContract.methods.balanceOf(account).call();
        console.log("cnt : ", cnt);
        if (cnt === "0") return;
        const mintedTree = await userContract.methods
          .tokenOfOwner(account)
          .call();
        if (myTrees) {
          setMyTrees(myTrees.concat(mintedTree));
        } else {
          setMyTrees(mintedTree);
        }
      }
      console.log(myTrees);
    };
    setter();
  }, [userContract]);

  useEffect(() => {
    if (myTrees) setIsLoading(false);
  }, [myTrees]);

  return (
    <Flex direction={"column"}>
      {isloading ? (
        "My Page Loading..."
      ) : myTrees ? (
        <Flex direction={"column"}>
          {myTrees.map((v, i) => {
            return (
              <TreeBox
                key={i}
                account={account}
                tokenId={v}
                userContract={userContract}
                treeContract={treeContract}
              />
            );
          })}
        </Flex>
      ) : (
        "나무 가진거 없다"
      )}
    </Flex>
  );
}
