const hre = require("hardhat");
const { ethers } = require("hardhat");
require("dotenv").config();
const {
  BERRY_METAURI,
  TREE_METAURI,
  // FERTILIZER_METAURI,
} = require("../../src/web3.metadata");

async function main() {
  const Tree = await ethers.getContractFactory("Tree");
  const TreeCont = await Tree.deploy("Tree", "TRE", TREE_METAURI);
  await TreeCont.deployed();

  // UPGRADING
  // const TreeV2 = await ethers.getContractFactory("TreeV2");
  // const upgraded = await upgrades.upgradeProxy(TreeCont.address, TreeV2);

  // NORMAL CONTRACT DEPLOY
  const berryContract = await hre.ethers.getContractFactory("Berry");
  const BerryCont = await berryContract.deploy("BERRY", "BRY", BERRY_METAURI);
  await BerryCont.deployed();

  // const fertilizerContract = await hre.ethers.getContractFactory("Fertilizer");
  // const FertCont = await fertilizerContract.deploy(FERTILIZER_METAURI);
  // await FertCont.deployed();

  // const ecoinContract = await hre.ethers.getContractFactory("Ecoin");
  // const EcoinCont = await ecoinContract.deploy();
  // await EcoinCont.deployed();

  const userContract = await hre.ethers.getContractFactory("User");
  const UserCont = await userContract.deploy(
    BerryCont.address,
    // EcoinCont.address,
    TreeCont.address
    // FertCont.address
  );
  await UserCont.deployed();

  console.log("==================================");
  console.log(`BER_CONT_ADDRESS = "${BerryCont.address}"`);
  console.log(`TRE_CONT_ADDRESS = "${TreeCont.address}"`);
  // console.log(`FER_CONT_ADDRESS = "${FertCont.address}"`);
  // console.log(`ECO_CONT_ADDRESS = "${EcoinCont.address}"`);
  console.log(`USE_CONT_ADDRESS = "${UserCont.address}"`);
  console.log("==================================");

  await BerryCont.setUserContract(UserCont.address);
  await TreeCont.setUserContract(UserCont.address);
  // await FertCont.setUserContract(UserCont.address);
  // await EcoinCont.setUserContract(UserCont.address);

  console.log("=============COMPLETE=============");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
