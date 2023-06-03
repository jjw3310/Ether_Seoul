import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  BERRY_ABI,
  BER_CONT_ADDRESS,
  ECOIN_ABI,
  ECO_CONT_ADDRESS,
  FERTILIZER_ABI,
  FER_CONT_ADDRESS,
  TREE_ABI,
  TRE_CONT_ADDRESS,
  USER_ABI,
  USE_CONT_ADDRESS,
} from "../web3.config.js";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [berryContract, setBerryContract] = useState();
  const [treeContract, setTreeContract] = useState();
  const [fertilizerContract, setFertilizerContract] = useState();
  const [ecoinContract, setEcoinContract] = useState();
  const [userContract, setUserContract] = useState();

  useEffect(() => {
    if (!window.ethereum) return;
    setWeb3(new Web3(window.ethereum));
  }, []);

  const getContracts = async () => {
    try {
      if (!web3) return;
      await setBerryContract(
        new web3.eth.Contract(BERRY_ABI, BER_CONT_ADDRESS)
      );
      await setTreeContract(new web3.eth.Contract(TREE_ABI, TRE_CONT_ADDRESS));
      await setFertilizerContract(
        new web3.eth.Contract(FERTILIZER_ABI, FER_CONT_ADDRESS)
      );
      await setEcoinContract(
        new web3.eth.Contract(ECOIN_ABI, ECO_CONT_ADDRESS)
      );
      await setUserContract(new web3.eth.Contract(USER_ABI, USE_CONT_ADDRESS));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContracts();
  }, [web3]);
  return {
    berryContract,
    treeContract,
    fertilizerContract,
    ecoinContract,
    userContract,
    getContracts,
  };
};

export const useWallet = () => {
  const [address, setAddress] = useState("");
  const getAddress = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAddress();
  }, []);
  return { address, getAddress };
};
