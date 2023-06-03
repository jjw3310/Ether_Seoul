// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "./Berry.sol";
import "./Ecoin.sol";
import "./Tree.sol";
import "./Fertilizer.sol";

contract User {
    Berry public berryContract;
    Ecoin public ecoinContract;
    Tree public treeContract;
    Fertilizer public ftContract;

    constructor(address _berry, address _ecoin, address _tree, address _ft) {
        berryContract = Berry(_berry);
        ecoinContract = Ecoin(_ecoin);
        treeContract = Tree(_tree);
        ftContract = Fertilizer(_ft);
    }

    struct user {
        address addr;
        string name;
        string imgUrl;
        uint level;
    }

    user[] users;
    mapping(address => uint) userMap;

    function setUser(string memory _imgUrl, string memory _name) public {
        userMap[msg.sender] = users.length;
        users.push(user(msg.sender, _name, _imgUrl, 0));
        berryContract.mintInitBerry(msg.sender);
    }

    function getUser(address _addr) public view returns(user memory) {
        return users[userMap[_addr]];
    }

    function harvest(uint _tokenId) public returns(uint) {
        require(_tokenId > 1000, "Only Minted Tree Can Harvest");
        require(treeContract.ownerOf(_tokenId) == msg.sender, "Only Owner Can Harvest");
        Tree.tree memory treeInfo = treeContract.getTreeInfo(_tokenId);
        berryContract.mintBerry(msg.sender, treeInfo.berryName, treeInfo.berryAmount);
        treeContract.renewHarvestTime(_tokenId);
        return treeInfo.berryAmount;
    }

    function growUnmintedTree(uint _treeId) public returns(uint) {
        if(users[userMap[msg.sender]].level == 0) {
            treeContract.growUnmintedTreeInfo(msg.sender, 0);
        } else{
            Tree.tree memory treeInfo = treeContract.getTreeInfo(_treeId);
            require(!treeInfo.isMaxLevel, "Your Tree Reaches At Max Level!");
            treeContract.growUnmintedTreeInfo(msg.sender, _treeId);
        }
        users[userMap[msg.sender]].level++;
        return (_treeId + 1);
    }

    function growMintedTree(uint _tokenId) public returns(uint) {
        Tree.tree memory treeInfo = treeContract.getTreeInfo(_tokenId);
        require(!treeInfo.isMaxLevel, "Your Tree Reaches At Max Level!");
        uint nextIdx = treeContract.getLvl1TreeId(treeInfo.treeType) + treeInfo.level - 1;
        treeContract.changeTreeInfo(_tokenId, nextIdx);
        return (treeInfo.level + 1);
    }

    function getTokenBalance(address _addr) public view returns(uint, uint, uint[] memory) {
        return (ecoinContract.balanceOf(_addr), berryContract.berryLength(), berryContract.balanceAllOf(_addr));
    }
}