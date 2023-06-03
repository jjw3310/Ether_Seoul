const hre = require("hardhat");
const {
  BER_CONT_ADDRESS,
  TRE_CONT_ADDRESS,
  FER_CONT_ADRESS,
  ECO_CONT_ADDRESS,
  USR_CONT_ADDRESS,
} = require("../../src/web3.metadata");

async function main() {
  // GET WALLET ADDRESS
  const [signer] = await hre.ethers.getSigners();
  const address = signer.address;
  //   GET CONTRACT
  const userContract = await hre.ethers.getContractFactory("User");
  const treeContract = await hre.ethers.getContractFactory("Tree");
  const berryContract = await hre.ethers.getContractFactory("Berry");
  // const fertilizerContract = await hre.ethers.getContractFactory("Fertilizer");
  // const ecoinContract = await hre.ethers.getContractFactory("Ecoin");

  const UserCont = await userContract.attach(USR_CONT_ADDRESS);
  const TreeCont = await treeContract.attach(TRE_CONT_ADDRESS);
  const BerryCont = await berryContract.attach(BER_CONT_ADDRESS);
  // const FertilCont = await fertilizerContract.attach(FER_CONT_ADRESS);
  // const EcoinCont = await ecoinContract.attach(ECO_CONT_ADDRESS);
  // //////////////////////////////////////////////////////////////////////////

  //   SIGN UP
  await UserCont.setUser("", "TEST_USER");
  const getUser = await UserCont.getUser(address);
  console.log(getUser);

  //   SIGN IN

  //   Tutorial Level up
  await UserCont.grow(0);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
