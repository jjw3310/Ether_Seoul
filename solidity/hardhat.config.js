require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/X5e8mhXZ3jALNrZ4LoliSv6ct9ESRN33", //https://polygon-mumbai.g.alchemy.com/v2/_e8jasy7LBmZv2YivYL3DV1NVnlRNzF2
      accounts: [process.env.DEPLOY_WALLET_PVK],
    },
    aurora_testnet: {
      url: "https://aurora-testnet.infura.io/v3/4a31adb4c5f34692aa05aeaf765bcfe6",
      accounts: [process.env.DEPLOY_WALLET_PVK],
    },
  },
};
