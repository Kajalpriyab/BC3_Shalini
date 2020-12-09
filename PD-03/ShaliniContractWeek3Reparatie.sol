pragma solidity 0.7.0;

contract Inbox {
    
    //Zorgt ervoor dat de front end weet wat er iets gebeurd is op de blockchain
    event NieuwBericht(uint BerichtId, string naam, uint message);
    
    uint randomDigits = 16;
    uint afrondingDigits = 10 ** randomDigits;
    //checken van resulten
    bool result;
    //struct van een bericht gemaakt die de volgende properties bevat
    struct Bericht {
        string naam;
        uint message;
    }
    
    //een array van de struct gemaakt waarin de bericht wordt opgeslagen
    Bericht[] public berichten;
    
    mapping (uint => address) public VerzenderVanBerichten;
    mapping (address => uint) VerzenderHaarBerichten;
    
    //functie gemaakt voor het aanmaken van berichten
    function _createBerichten(string memory _naam, uint _message) private {
       uint id = berichten.length-1;
       //weten wie welke berichten verstuurd
       VerzenderVanBerichten[id] = msg.sender;
       VerzenderHaarBerichten[msg.sender]++;
        //checkt of de array groter is dan 1
       assert(id>=1);
       result = true;
       
       //dit zou natuurlijk moeten worden uitgebreid zodat die elke keer checkt of er een nieuw array is aangemaakt en dit emit
       if(result == true){ 
           //zorgt ervoor dat de event wordt aangeroepen als er een nieuw bericht is gemaakt
             emit NieuwBericht(id, _naam, _message);
         } 
         
     
    }
    //dit is om random berichten te generate met de kccak256 die 256 bit hexadecimaal nummer geeft
    function _generateRandomBerichten(string memory _str) private view returns (uint) {
        uint randomBerichten = uint(keccak256(abi.encodePacked(_str)));
        return randomBerichten % afrondingDigits;
        
        
    }
    //deze mag altijd worden aangeroepen, maakt random berichten aan
   function createRandomBericht(string memory _naam) public {
            uint randBericht = _generateRandomBerichten(_naam);
             _createBerichten(_naam, randBericht);
        
    }
    
    //deze functie is om alle berichten te kunnen zien, wordt nog uitgebreid
    function viewBerichten() private view returns(uint){
        
    }
   
}