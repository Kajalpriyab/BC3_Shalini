pragma solidity ^0.6.0;

contract SimpleStorage {
    uint private numbers;
    string private names; //later use

    function setNumbers(uint _numbers) public {
        numbers = _numbers;
    }

    function getNumbers() public view returns (uint) {
        return numbers;
    }
    
    //future improvement
    //modifier onlyOwner() {
     //require(msg.sender == owner, "not the owner");
    // _;
 }
