// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

// import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";

contract Tree is ERC721EnumerableUpgradeable, OwnableUpgradeable {
    using StringsUpgradeable for string;
    address userContract;
    string metadataBaseURI;
    enum treeName {GREENTREE,REDTREE,PEACHTREE,ORANGETREE, ERROR}
    uint256 public treeLength;

    function initialize(string memory _uri) initializer public {
        __ERC721_init("TREE", "TRE");
        __Ownable_init();
        metadataBaseURI = _uri;
    }

    function initFunction() public onlyOwner {
        treeLength = uint256(treeName.ERROR);
        string[] memory idsTemp = new string[](1);
        uint256[] memory amtTemp = new uint256[](1);
        idsTemp[0] = "WATER";
        amtTemp[0] = 0;
        treeEncyclopedia[0] = tree("GREEN_TREE_1",false,string(abi.encodePacked(metadataBaseURI,"0",".json")),"GREENTREE",1,false,"GREENAPPLE",0,0, idsTemp, amtTemp);
        treeEncyclopedia[1] = tree("GREEN_TREE_2",false,string(abi.encodePacked(metadataBaseURI,"1",".json")),"GREENTREE",2,false,"GREENAPPLE",0,0, idsTemp, amtTemp);
        treeEncyclopedia[2] = tree("GREEN_TREE_3",false,string(abi.encodePacked(metadataBaseURI,"2",".json")),"GREENTREE",3,false,"GREENAPPLE",0,0, idsTemp, amtTemp);
        treeEncyclopedia[3] = tree("GREEN_TREE_4",false,string(abi.encodePacked(metadataBaseURI,"3",".json")),"GREENTREE",4,false,"GREENAPPLE",0,0, idsTemp, amtTemp);
        treeEncyclopedia[4] = tree("GREEN_TREE_5",false,string(abi.encodePacked(metadataBaseURI,"4",".json")),"GREENTREE",5,true,"GREENAPPLE",5,0, idsTemp, amtTemp);   
    }

    struct tree {
        string name;
        bool custumedName;
        string metadataUri;
        string treeType;
        uint level;
        bool isMaxLevel;
        string berryName;
        uint256 berryAmount;
        uint lastHarvestTime;
        string[] FertilName;
        uint256[] FertilAmounts;
    }

    // uint public totalSupply;

    mapping(uint => tree) treeEncyclopedia; // 0~999 Basic Unmintable Tree // 1000~ User Minted Tree
    mapping(address => uint256[]) unmintedTrees;

    function setUserContract(address _userContractAddress) public onlyOwner {
        userContract = _userContractAddress;
    }

    function setTree(address _to, uint _treeId) public {
        require(treeEncyclopedia[_treeId].level == 1,"Only Level 1 Tree Can Be Set");
        unmintedTrees[_to].push(_treeId);
    }

    function mintTree(address _to, uint _treeId) public {
        require(treeEncyclopedia[_treeId].isMaxLevel==true,"Only max level tree can be minted");
        require(_treeId < 1000, "Check Your TreeId");
        int flag = -1;
        for(uint i=0; i < unmintedTrees[_to].length; i++) {
            if(unmintedTrees[_to][i] == _treeId) flag = int(i);
        }
        require(flag > -1, "You don't have that tree");

        for(; uint(flag) < unmintedTrees[_to].length-1; flag++) {
            unmintedTrees[_to][uint(flag)] == unmintedTrees[_to][uint(flag)+1]; 
        }
        unmintedTrees[_to].pop();
        treeEncyclopedia[uint256(1000)+totalSupply()] = treeEncyclopedia[_treeId];
        _safeMint(_to, 1000+totalSupply());
    }

    function getTreeInfo(uint256 _tokenId) public view returns(tree memory) {
        return treeEncyclopedia[_tokenId];
    }

    function renewHarvestTime(uint256 _tokenId) public {
        treeEncyclopedia[_tokenId].lastHarvestTime = block.timestamp;
    }

    function growUnmintedTreeInfo(address _addr, uint256 _treeId) public {
        require(_treeId < 1000, "Only Unminted Tree Can Use This Function");
        require(!treeEncyclopedia[_treeId].isMaxLevel,"Tree Already Reaches Max Level");
        int flag = -1;
        for(uint i=0; i < unmintedTrees[_addr].length; i++) {
            if(unmintedTrees[_addr][i] == _treeId) flag = int(i);
        }
        require(flag > -1, "You don't have that tree");

        unmintedTrees[_addr][uint256(flag)] = unmintedTrees[_addr][uint256(flag)] + 1;
    }

    function changeTreeInfo(uint256 _tokenId, uint256 _nextTreeIdx) public {
        string memory prevName = treeEncyclopedia[_tokenId].name;
        treeEncyclopedia[_tokenId] = treeEncyclopedia[_nextTreeIdx];
        if(treeEncyclopedia[_tokenId].custumedName) {
            treeEncyclopedia[_tokenId].name = prevName;
        }
    }

// UTIL FUNCTIONS
    function getLvl1TreeId(string memory _treeName) public pure returns(uint) {
        uint256 enumIdx;
        if(_treeName.equal("GREENTREE")) {
            enumIdx = uint256(treeName.GREENTREE);
        } else if(_treeName.equal("REDTREE")) {
            enumIdx = uint256(treeName.REDTREE);
        } else if(_treeName.equal("PEACHTREE")) {
            enumIdx = uint256(treeName.PEACHTREE);
        } else if(_treeName.equal("ORANGETREE")) {
            enumIdx = uint256(treeName.ORANGETREE);
        } else {
            require(true,"Check Tree Name");
        }
        return enumIdx * 5;
    }

    function getBalanceOfUnmintedTree(address _addr) public view returns(uint256[] memory) {
        return unmintedTrees[_addr];
    }

// OVERRIDE & REDEFINED FUNCTIONS
    function tokenURI(uint _tokenId) override public view returns(string memory) {
        return treeEncyclopedia[_tokenId].metadataUri;
    }

    function _baseURI() override internal view returns(string memory) {
        return metadataBaseURI;
    }

// MODIFIER
    modifier onlyUser(address _addr) {
        require(_addr == userContract,"Only User Contract Can Call This Function");
        _;
    }

    modifier ownTree(address _addr, uint256 _treeId) {
        int flag = -1;
        for(uint i=0; i < unmintedTrees[_addr].length; i++) {
            if(unmintedTrees[_addr][i] == _treeId) flag = int(i);
        }
        require(flag > -1, "You don't have that tree");
        _;
    }
}