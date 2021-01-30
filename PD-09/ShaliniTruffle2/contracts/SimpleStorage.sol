pragma solidity ^0.6.0;

import "@openzeppelin/upgrades-core/contracts/Initializable.sol";

/// @title simple way of storing and viewing data with permissions
/// @author Shalini
/// @notice dont use this contract for real use it only implements the basics to show some working function for the assignment
/// @dev Functions are working but for web usage eth that gets send needs to be coded
contract SimpleStorage is Initializable {
/// @author Shalini
/// @notice kill contract and deposit only works if you are the owner
/// @dev working application in remix
event numbers(address sender, uint amount, uint balance);
    string private names; //later use

    address payable public owner;
   
   function initialize() public initializer {
   owner = msg.sender;
    }   

 modifier onlyOwner() {
     require(msg.sender == owner, "not owner");
     _;
 }
    //demonstrate that only the owner can deposit in the contract
     function depositnumbers() public payable onlyOwner{
     emit numbers(msg.sender, msg.value, address(this).balance);
 }
    ///@return balance of the smartcontract dont need to be the owner to see it
    //gets the current stored balance value
    function numberstBalance() public view returns (uint){
     return address(this).balance;
 }
    //can only be used by the owner to kill the contract
    //commented because zepplin cant compile with this
    //function close() public { 
    //selfdestruct(owner); 
    //}
 }
