import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HeaderDesktop from "./molecules/HeaderDesktop";
import HeaderMobile from "./molecules/HeaderMobile";

const Header = ({ account, setAccount, nickName, windowWidth }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getCoinPrice();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const [device, setDevice] = useState("Desktop");
  useEffect(() => {
    setDevice(windowWidth);
  }, [windowWidth]);

  return (
    <>
      {device === `Desktop` ? (
        <HeaderDesktop
          account={account}
          nickName={nickName}
          onClickAccount={onClickAccount}
        />
      ) : (
        <HeaderMobile
          account={account}
          nickName={nickName}
          onClickAccount={onClickAccount}
        />
      )}
    </>
  );
};

export default Header;
