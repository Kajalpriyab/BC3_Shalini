pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string memory initalMessage) public {
        message = initalMessage;
    }
    // makes a message to test on remix
   function setMessage(string memory newMessage) public{
       message = newMessage;
   }
   //
    //this doenst have to be made but this is just for testing my first contract. The variable in contract inbox named message already does the same as this
    function getMessage() public view returns (string){
        return message;
    }
}