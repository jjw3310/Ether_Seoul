# TREEtment (working title)

An NFT project promoting eco-friendly activities

## Participated in

- ETH SEOUL 2023

## Description

It is an E2E (Eco to Earn) project that raises awareness about environmental issues and encourages people to engage in eco-friendly activities.

#### Metadata

- Berry
  - https://ipfs.io/ipfs/QmcpQWLKDSQ6PzG6uiAuFcctdA53b8XEKDUGKXganrt9bB/{id}.json
- Fertilizer
  - https://ipfs.io/ipfs/QmPRNrxVpzdTD56j6Xh2pUZLE6NiGhL4owTCTsq4BuYiwE/{id}.json
- Tree
  - https://ipfs.io/ipfs/QmdxY1P6UW3ZUbFqdMDp7U9AGb3wyd7vuKmZL1wtNru4Bg/{id}.json

#### Image

- Berry
  - https://ipfs.io/ipfs/QmdXXzCVozYjikMFMfJjVuaJZdeooeqskQZhtfzqgweUAX/
- ## Fertilizer
- Tree
  - https://ipfs.io/ipfs/QmdhLXQVdoshQMGtL6Wuy6ZHFVqmMGat1D1shgeVAAHsqf/

### Dependencies

- Describe any prerequisites, libraries, OS version, etc., needed before installing program.

## Team (A to Z)

- 홍연 - Product Designer
- 형준 - Designer
- 정호 - Developer
- 지민 - Developer
- JoungYun - Developer
  - Smart Contract ( Solidity )
    - User, Ecoin, Berry, Tree, Fertilizer
  - React ( Javascript )
    - My Page
  - README.md
- 지원 - Developer

## Road Map

- 0.2

  - Various bug fixes and optimizations

- 0.1

  - Initial Release

## References

- [Upgradeable Contract](https://docs.openzeppelin.com/contracts/4.x/upgradeable)

- [Metadata JSON](https://eips.ethereum.org/EIPS/eip-1155#metadata)

- [Hardhat](https://hardhat.org/)

## How to Deploy

1. berry, tree, fertilizer, ecoin `deploy`
2. user `deploy`
3. tree.initFunction()

## Interface

#### Tree.sol (ERC721Upgradeable, OwnableUpgradeable)

```solidity
struct tree {
	string name;
	string metadataUri;
	string info;
	uint level;
	bool isMaxLevel;
}
////STATE VARIABLES
// minted Amount
uint public totalSupply;
// treeID => struct tree
mapping(uint => tree) treeEncyclopedia;
// userAddress => treeID => own or not
mapping(address => mapping(uint => bool)) unmintedTrees;
// setting user Contract Address

////FUNCTIONS
function setContract(address _userContract)
// get a unmintable tree
function setTree(uint _id)
// mint a max level tree to user
function mintTree(uint _id)
// get berry from minted tree (call Berry.safeMint)
function harvestBerry(uint _id) returns(uint)
// level up unmintable tree
function growUpTree(uint _treeId) returns(bool, uint)
// find Level 1 treeId by Name
functon getLvl1TreeId(string _treeName) returns(uint)
```

#### User.sol

```solidity
struct user {
    address addr;
    string name;
    string imgUrl;
}

user[] users;
mapping(address => uint) userMap;

// set user nickname and profile image
function setUser(string memory _imgUrl, string memory _name)
// return user info
function getUser(address _addr) returns(user memory)
// get berry (call tree.harvestBerry)
function harvest(uint _treeId) returns(uint)
// get balanceOf Ecoin & Berry
function getTokenBalance(address _addr) returns(uint, uint, uint[] memory)
```

### Fertilizer.sol (ERC1155, Ownable)

```solidity
enum FertilizerName {WATER, METAL, EARTH, FIRE, WOOD, ERROR}
uint256 public fertilizerLength;

// OVERRIDE & REDEFINED FUNCTIONS
// mint
function mintFertilizer(address _addr, string _ftName, uint256 _ftAmount)
// burn
function burnFertilizer(address _addr, string memory _ftName, uint256 _ftAmount)
// get balanceOf Every Fertilizer
function balanceAllOf(address _addr) public view returns(uint256[] memory)
```

### Berry.sol (ERC1155, Ownable)

```solidity
enum berryName {GREENAPPLE, REDAPPLE, PEACH, ORANGE, ERROR}
uint256 public berryLength;
initBerry = [REDAPPLE, PEACH, ORANGE];
initBerryAmt = [90,50,75];

// OVERRIDE & REDEFINED FUNCTIONS
// mint
function mintBerry(address _addr, string memory _berryName, uint256 _amount)
// burn
function burnBerry(address owner, string memory _berryName, uint256 _amount)
// get balanceOf Every Berry
function balanceAllOf(address _addr) returns(uint256[] memory)
```
