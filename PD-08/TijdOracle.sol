// SPDX-License-Identifier: MIT~
//simple oracle contract to display current NL time 
pragma solidity ^0.6.0;
import "github.com/provable-things/ethereum-api/provableAPI_0.6.sol";

//pakt up-to-date tijd van Nederland
contract Tijd is usingProvable {
   string  public tijdAmsterdam;
   uint256 public priceOfUrl;
  
   constructor() public payable {}

   function __callback(bytes32 /* myid prevent warning*/ , string memory result ) override public {
       if (msg.sender != provable_cbAddress()) revert();
       tijdAmsterdam = result;
   }

   //haalt de tijd op van de oracle!
   function GetAtmTijd() public payable {
       priceOfUrl = provable_getPrice("URL");
       require (address(this).balance >= priceOfUrl,
            "please add some ETH to cover for the query fee");
       provable_query("URL", 
            "json(http://worldtimeapi.org/api/timezone/Europe/Amsterdam).utc_datetime");
   }
}