pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @author Shayas Token
contract Shayaserc20 is ERC20 {
    
    constructor() public ERC20("Shayastruffles", "SSFF") {
        _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
    }
}