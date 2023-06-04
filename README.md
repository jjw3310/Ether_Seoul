# FoRe-Fi

An NFT project promoting eco-friendly activities

## Participated in

- ETH SEOUL 2023

## Description

It is an E2E (Eco to Earn) project that raises awareness about environmental issues and encourages people to engage in eco-friendly activities.

#### Metadata

- Berry
  - https://ipfs.io/ipfs/QmWC7cg5anWmsQvoxbku2VXXFMpQ9gk3PvCbWq57vgyvAf/berry/{id}.json
- Fertilizer
  - https://ipfs.io/ipfs/QmWC7cg5anWmsQvoxbku2VXXFMpQ9gk3PvCbWq57vgyvAf/fertilizer/{id}.json
- Tree
  - https://ipfs.io/ipfs/QmWC7cg5anWmsQvoxbku2VXXFMpQ9gk3PvCbWq57vgyvAf/tree/

#### Image

- Berry
  - https://ipfs.io/ipfs/QmWYHR5ZiK7uGFMuxghihfchhmbLWrDiWWgQwg86abPLtq/
- Tree
  - https://ipfs.io/ipfs/QmaSH615dS7qYwiuBGAfvWK75eR4KgFUwGph8MGAas5fER/

### Tech Stack

- Solidity, React, Hardhat, IPFS, ERC1155, ERC721, RPC Provider

## Team (A to Z)

- Marie - Product Designer
- HyungJun - Designer
- JungHo - Developer
- JiMin - Developer
  - Smart Contract ( Solidity )
    - Community
  - React ( Javascript, chakaraUI, ipfs-api, data optimization )
    - Community, data optimization
- JoungYun - Developer
  - Smart Contract ( Solidity )
    - User, Ecoin, Berry, Tree, Fertilizer
  - React ( Javascript )
    - My Page
  - README.md
- JiWon - Developer

## Road Map

- 0.1

  - Initial Release

## References

- [Upgradeable Contract](https://docs.openzeppelin.com/contracts/4.x/upgradeable)

- [Metadata JSON](https://eips.ethereum.org/EIPS/eip-1155#metadata)

- [Hardhat](https://hardhat.org/)

## How to Deploy

1. berry, tree, /_ fertilizer, ecoin _/ `deploy`
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

```solidity
struct Post {
    uint id;
    uint myId;
    address writer;
    PostKinds kind;
    string content;
    string[] imgUrl;
    string[] hashtag;
    uint writeDate;
    uint updateDate;
    bool deleteCheck;
}
//Manage all posts
Post[] allPost;
//post kind
enum PostKinds { myTreeNft, ecoInfo, ecoLifeStyle }
//user likes check
mapping(uint => mapping(address => bool)) likeCheck;
//is user recieve rewards?
mapping(address => mapping(uint => mapping(uint => bool))) isReward;
//posts like (index == id)
uint[] postLikeCnt;
//posts conmment (index == id)
uint[] postCommentCnt;
//posts comments
mapping(uint => Comment[]) commentlist;
// manage user's posts
mapping(address => Post[]) myPosts;


function getAllPosts() public view returns(Post[] memory, User.user[] memory, uint[] memory, uint[] memory, bool[] memory)
function createPost(uint _kind, string memory _content, string[] memory _imgUrls, string[] memory _hashTags, uint _writeDate) public returns (uint256)
function updatePost(uint _id, string memory _content, string[] memory _imgUrls, string[] memory _hashTags, uint _updateDate) public returns (uint)
function deletePost(uint _id, uint _myId) public
function getUsersPosts() public view returns(Post[] memory)
function pushLike(uint _id) public returns(uint256)
function isPushLike(uint _id) public view returns(bool)
function getPostCommnet(uint _id) public view returns (Comment[] memory)
function deltetePostComment(uint _id, uint commentId) public
```
