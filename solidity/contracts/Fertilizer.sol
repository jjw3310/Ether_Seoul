// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Fertilizer is ERC1155, Ownable {
    using Strings for string;
    string public name;
    string public symbol;
    address userContract;
    enum FertilizerName {WATER, METAL, EARTH, FIRE, WOOD, ERROR}
    uint256 public fertilizerLength;

    constructor(string memory _baseUri) ERC1155("") {
        _setURI(_baseUri);
        fertilizerLength = uint256(FertilizerName.ERROR);
    }
    
    function setUserContract(address _userContractAddress) public onlyOwner {
        userContract = _userContractAddress;
    }

// OVERRIDE & REDEFINED FUNCTIONS
    function mintFertilizer(address _addr, string memory _ftName, uint256 _ftAmount)
     public CheckFtName(_ftName) {
        _mint(_addr, uint256(strToEnum(_ftName)), _ftAmount, "");
    }

    function burnFertilizer(address _addr, string memory _ftName, uint256 _ftAmount)
     public CheckFtName(_ftName) {
         _burn(_addr, uint256(strToEnum(_ftName)), _ftAmount);
    }

    function balanceAllOf(address _addr) public view returns(uint256[] memory) {
        uint256[] memory balanceArr = new uint256[](fertilizerLength);
        for(uint i=0; i < fertilizerLength; i++) {
            balanceArr[i] = balanceOf(_addr,i);
        }
        return balanceArr;
    }

// MODIFIER   
    modifier onlyUser(address _addr) {
        require(_addr == userContract,"Only User Contract Can Call This Function");
        _;
    }

    modifier CheckFtName(string memory _name) {
        require(uint256(strToEnum(_name)) < fertilizerLength,"Check Your Fertilizer Name");
        _;
    }

// UTIL FUNCTIONS
    function strToEnum(string memory _name) public pure returns(FertilizerName) {
        if(_name.equal("WATER")){
            return FertilizerName.WATER;
        } else if(_name.equal("METAL")) {
            return FertilizerName.METAL;
        } else if(_name.equal("EARTH")) {
            return FertilizerName.EARTH;
        } else if(_name.equal("FIRE")) {
            return FertilizerName.FIRE;
        } else if(_name.equal("WOOD")) {
            return FertilizerName.WOOD;
        } else {
            return FertilizerName.ERROR;
        }
    }
}