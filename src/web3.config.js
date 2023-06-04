export const BER_CONT_ADDRESS = "0x3b243375cB7e3c6C1fd85868e83812c961e50A89";
export const TRE_CONT_ADDRESS = "0x726666d5b81f4BbBaAbc0899E37B768cDFf6c5b4";
export const USE_CONT_ADDRESS = "0x7Ac3917B77BAF7D42C6ea8484cbEeEBDA3c0e504";
export const COM_CONT_ADDRESS = "0x4aA01BBC08859603567f2796d076BC620AC9455b";
// export const FER_CONT_ADDRESS = "0x3bf7ef9A7FD6242Aaa3b788E25cbcE40F2fFf08d";
// export const ECO_CONT_ADDRESS = "0xD0de5DC272831d14357c4E7d18b6c472Ea9978bE";

export const MARKET_ADDRESS = "0xC375F6dFCd7eab88dBD47DDc5586c8e723b22434";
export const MARKET_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_trade",
        type: "uint256",
      },
    ],
    name: "cancelTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_trade",
        type: "uint256",
      },
    ],
    name: "executeTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_item",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "openTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_imgUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_category",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_berryType",
        type: "uint256",
      },
    ],
    name: "setItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ecotokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ecoAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_berrytokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_berryId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_berryAmount",
        type: "uint256",
      },
    ],
    name: "swapToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_a",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_ecotokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_ecoAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_berrytokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_berryId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_berryAmount",
        type: "uint256",
      },
    ],
    name: "TokenSwapped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ad",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "status",
        type: "bytes32",
      },
    ],
    name: "TradeStatusChange",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_enum",
        type: "uint256",
      },
    ],
    name: "EnumToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getItemList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "imgUrl",
            type: "string",
          },
          {
            internalType: "enum Market.Category",
            name: "category",
            type: "uint8",
          },
          {
            internalType: "enum Market.BerryName",
            name: "berryType",
            type: "uint8",
          },
        ],
        internalType: "struct Market.Item[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_trade",
        type: "uint256",
      },
    ],
    name: "getTrade",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "searchItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "imgUrl",
            type: "string",
          },
          {
            internalType: "enum Market.Category",
            name: "category",
            type: "uint8",
          },
          {
            internalType: "enum Market.BerryName",
            name: "berryType",
            type: "uint8",
          },
        ],
        internalType: "struct Market.Item",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_keyword",
        type: "string",
      },
    ],
    name: "searchKeyword",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "imgUrl",
            type: "string",
          },
          {
            internalType: "enum Market.Category",
            name: "category",
            type: "uint8",
          },
          {
            internalType: "enum Market.BerryName",
            name: "berryType",
            type: "uint8",
          },
        ],
        internalType: "struct Market.Item[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_berryName",
        type: "string",
      },
    ],
    name: "strToEnum",
    outputs: [
      {
        internalType: "enum Market.BerryName",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "trades",
    outputs: [
      {
        internalType: "address",
        name: "poster",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "item",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "status",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const BERRY_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseUri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "balanceAllOf",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "berryLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_berryName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burnBerry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_berryName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintBerry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "mintInitBerry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userContractAddress",
        type: "address",
      },
    ],
    name: "setUserContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_berryName",
        type: "string",
      },
    ],
    name: "strToEnum",
    outputs: [
      {
        internalType: "enum Berry.berryName",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const TREE_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextTreeIdx",
        type: "uint256",
      },
    ],
    name: "changeTreeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "getBalanceOfUnmintedTree",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_treeName",
        type: "string",
      },
    ],
    name: "getLvl1TreeId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getTreeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "custumedName",
            type: "bool",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "treeType",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMaxLevel",
            type: "bool",
          },
          {
            internalType: "string",
            name: "berryName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "berryAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastHarvestTime",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "burnBerryName",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "burnBerryAmounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct Tree.tree",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_treeId",
        type: "uint256",
      },
    ],
    name: "growUnmintedTreeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_treeId",
        type: "uint256",
      },
    ],
    name: "mintTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "renewHarvestTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_treeId",
        type: "uint256",
      },
    ],
    name: "setTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userContractAddress",
        type: "address",
      },
    ],
    name: "setUserContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treeLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
// export const FERTILIZER_ABI = [
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_baseUri",
//         type: "string",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "bool",
//         name: "approved",
//         type: "bool",
//       },
//     ],
//     name: "ApprovalForAll",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "values",
//         type: "uint256[]",
//       },
//     ],
//     name: "TransferBatch",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "TransferSingle",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "string",
//         name: "value",
//         type: "string",
//       },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "URI",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_addr",
//         type: "address",
//       },
//     ],
//     name: "balanceAllOf",
//     outputs: [
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address[]",
//         name: "accounts",
//         type: "address[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//     ],
//     name: "balanceOfBatch",
//     outputs: [
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_addr",
//         type: "address",
//       },
//       {
//         internalType: "string",
//         name: "_ftName",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_ftAmount",
//         type: "uint256",
//       },
//     ],
//     name: "burnFertilizer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "fertilizerLength",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//     ],
//     name: "isApprovedForAll",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_addr",
//         type: "address",
//       },
//       {
//         internalType: "string",
//         name: "_ftName",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_ftAmount",
//         type: "uint256",
//       },
//     ],
//     name: "mintFertilizer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "amounts",
//         type: "uint256[]",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//     ],
//     name: "safeBatchTransferFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//     ],
//     name: "safeTransferFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         internalType: "bool",
//         name: "approved",
//         type: "bool",
//       },
//     ],
//     name: "setApprovalForAll",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_userContractAddress",
//         type: "address",
//       },
//     ],
//     name: "setUserContract",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_name",
//         type: "string",
//       },
//     ],
//     name: "strToEnum",
//     outputs: [
//       {
//         internalType: "enum Fertilizer.FertilizerName",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "pure",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "bytes4",
//         name: "interfaceId",
//         type: "bytes4",
//       },
//     ],
//     name: "supportsInterface",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "uri",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
// export const ECOIN_ABI = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//     ],
//     name: "allowance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "approve",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "burn",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_addr",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "_amount",
//         type: "uint256",
//       },
//     ],
//     name: "burn",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "burnFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "decimals",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "pure",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "subtractedValue",
//         type: "uint256",
//       },
//     ],
//     name: "decreaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "addedValue",
//         type: "uint256",
//       },
//     ],
//     name: "increaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "mint",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_userContractAddress",
//         type: "address",
//       },
//     ],
//     name: "setUserContract",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalSupply",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transfer",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transferFrom",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];
export const USER_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_berry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tree",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "berryContract",
    outputs: [
      {
        internalType: "contract Berry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "getTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "imgUrl",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        internalType: "struct User.user",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "growMintedTree",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treeId",
        type: "uint256",
      },
    ],
    name: "growUnmintedTree",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "harvest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_imgUrl",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "tokenOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treeContract",
    outputs: [
      {
        internalType: "contract Tree",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const COMMUNITY_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ecoin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_kind",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_imgUrls",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_hashTags",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_writeDate",
        type: "uint256",
      },
    ],
    name: "createPost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_myId",
        type: "uint256",
      },
    ],
    name: "deletePost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
    ],
    name: "deltetePostComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "myId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "writer",
            type: "address",
          },
          {
            internalType: "enum Community.PostKinds",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "imgUrl",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "hashtag",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "writeDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updateDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleteCheck",
            type: "bool",
          },
        ],
        internalType: "struct Community.Post[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "imgUrl",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
        ],
        internalType: "struct User.user[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPostCommnet",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "writer",
            type: "address",
          },
          {
            internalType: "string",
            name: "contents",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "writeDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleteCheck",
            type: "bool",
          },
        ],
        internalType: "struct Community.Comment[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsersPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "myId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "writer",
            type: "address",
          },
          {
            internalType: "enum Community.PostKinds",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "imgUrl",
            type: "string[]",
          },
          {
            internalType: "string[]",
            name: "hashtag",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "writeDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updateDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "deleteCheck",
            type: "bool",
          },
        ],
        internalType: "struct Community.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "isPushLike",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "pushLike",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_imgUrls",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_hashTags",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_updateDate",
        type: "uint256",
      },
    ],
    name: "updatePost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_commentContent",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_writeDate",
        type: "uint256",
      },
    ],
    name: "writeComment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
