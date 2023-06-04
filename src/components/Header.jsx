import { useEffect, useState } from "react";
import HeaderDesktop from "./molecules/HeaderDesktop";
import HeaderMobile from "./molecules/HeaderMobile";
import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import BackPageLeft from '../assets/images/BackPageLeft.png';

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
  const [connectedAccount] = useGlobalState('connectedAccount')
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