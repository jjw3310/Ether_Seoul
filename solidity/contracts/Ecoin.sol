// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Ecoin is ERC20, ERC20Burnable, Ownable {
    address userContract;

    constructor() ERC20("Ecoin", "ECO") {}

    function setUserContract(address _userContractAddress) public onlyOwner {
        userContract = _userContractAddress;
    }

// OVERRIDE & REDEFINED FUNCTIONS
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(address _addr, uint256 _amount) public {
        _burn(_addr, _amount);
    }

// OVERRIDE & REDEFINED FUNCTIONS
    function decimals() override public pure returns(uint8){
        return 0;
    }

// MODIFIER
    modifier onlyUser(address _addr) {
        require(_addr == userContract,"Only User Contract Can Call This Function");
        _;
    }
}