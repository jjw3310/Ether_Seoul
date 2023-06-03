// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Berry is ERC1155, Ownable {
    using Strings for string;
    string public name;
    string public symbol;
    address userContract;
    enum berryName {GREENAPPLE, REDAPPLE, PEACH, ORANGE, ERROR}
    uint256 public berryLength;

    constructor(string memory _name, string memory _symbol, string memory _baseUri) ERC1155("") {
        name = _name;
        symbol = _symbol;
        _setURI(_baseUri);
        berryLength = uint256(berryName.ERROR);
    }

    uint256[] initBerryId = [uint256(berryName.REDAPPLE), uint256(berryName.PEACH), uint256(berryName.ORANGE)];
    uint256[] initBerryAmt = [1,1,1];

    function setUserContract(address _userContractAddress) public onlyOwner {
        userContract = _userContractAddress;
    }

    function mintInitBerry(address _addr) public {
        _mintBatch(_addr, initBerryId, initBerryAmt, "");
    }

// OVERRIDE & REDEFINED FUNCTIONS
    function mintBerry(address _addr, string memory _berryName, uint256 _amount)
     public CheckBerryName(_berryName) {
        _mint(_addr, uint256(strToEnum(_berryName)), _amount, "");
    }

    function burnBerry(address owner, string memory _berryName, uint256 _amount)
     public CheckBerryName(_berryName) {
        _burn(owner, uint256(strToEnum(_berryName)), _amount);
    }

    function balanceAllOf(address _addr) public view returns(uint256[] memory) {
        uint256[] memory balanceArr = new uint256[](berryLength);
        for(uint i=0; i < berryLength; i++) {
            balanceArr[i] = balanceOf(_addr,i);
        }
        return balanceArr;
    }

// MODIFIER
    modifier CheckBerryName(string memory _berryName) {
        require(uint256(strToEnum(_berryName)) < berryLength,"Check Your Berry Name");
        _;
    }
    
    modifier onlyUser(address _addr) {
        require(_addr == userContract,"Only User Contract Can Call This Function");
        _;
    }

// UTIL FUNCTIONS
    function strToEnum(string memory _berryName) public pure returns(berryName) {
        if(_berryName.equal("GREENAPPLE")){
            return berryName.GREENAPPLE;
        } else if(_berryName.equal("REDAPPLE")){
            return berryName.REDAPPLE;
        } else if(_berryName.equal("PEACH")){
            return berryName.PEACH;
        } else if(_berryName.equal("ORANGE")){
            return berryName.ORANGE;
        } else {
            return berryName.ERROR;
        }
    }
}