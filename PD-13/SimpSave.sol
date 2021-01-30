pragma solidity ^0.6.0;

/// @title Simpsave save numbers and retrieve them

// import the library from zepplin with this raw githubcontent otherwise you will get a error in remix
// Relatively simple contract to show the use of the access control
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts/access/Ownable.sol";

contract SimpSave is Ownable {
    string data = "testdata";
    uint number = 5000;
   
    constructor() public Ownable() {
  
    }
    //demonstrate the access control on this function
    function saveTextData(string memory _data) public onlyOwner {
        data = _data;
    }
    //demonstrate the acces control on this function 
    function GetTextData() public onlyOwner view returns (string memory) {
        return data;
    }
    //demonstration a function without the acces control
    function SaveNumberData(uint _number) public{
        number = _number;
    }
    //demonstration a function without the acces control
    function GetNumberData()public view returns(uint)
    {
        return number;
    }
}