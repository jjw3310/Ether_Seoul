## Initial Setting

/solidity/.env

DEPLOY_WALLET_PVK = "PVK KEY HERE"

## How to use

```shell
npx hardhat run ./scripts/1.deploy.js --network mumbai
```

## User Flow

1. Sign Up
   1. Start with User level 0
   2. Get Basic Tree
   3. Get Init Berry (Cannot Transfer or Trade with Ecoin)
2. Sign In
   1. Get Ecoin (1 coin per a day)
3. Play tutorial
   1. make Basic Tree level 1 to 2.
   2. Burn every Init Berry
   3. User level 0 to 1 (Now can transfer or trade with Ecoin)
4. Move to Campaign
5. Join Campaign
