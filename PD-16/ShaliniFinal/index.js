const contract_address = '0xCd39Fd162C655957625E8fFd4d0702da57C6FA36';
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "SaveNumberData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_data",
				"type": "string"
			}
		],
		"name": "saveTextData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetNumberData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTextData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

window.addEventListener('load', asyncloaded);    
// Function from web3examples. responsible for loading the provider.
async function asyncloaded() {
    web3 = new Web3(Web3.givenProvider); // provider from metamask      
    var result = await web3.eth.requestAccounts().catch(x => console.log(x.message));
    console.log(`web3 is present: ${web3.version}`); // note: use ` (back quote)
    const network = await web3.eth.net.getId().catch((reason) => console.log(`Cannnot find network ${reason}`));
    if (typeof network === 'undefined' || network != 4) { console.log("Please select Rinkeby test network"); return; }
    console.log("Ethereum network: Rinkeby")
    accounts = await web3.eth.getAccounts();
    console.log(accounts[0]); // show current user.
    contract = new web3.eth.Contract(abi, contract_address);
}
window.addEventListener('load', asyncloaded);     

//functie op data te verzenden
function saveTextData(){
    var numberstored = document.getElementById("textstored").value;
    console.log(numberstored);
    contract.methods.saveTextData(numberstored).send({from: accounts[0]});
    console.log(numberstored);
}

//functie om data op te halen
function GetTextData() {
    //contract call naar de sol contract
    contract.methods.GetTextData().call().then( function( Text ) {
      console.log("this is the stored number: ", Text);
      document.getElementById('text').innerHTML = Text;
    });
  }

  function SaveNumberData(){
    var numberstored = document.getElementById("numberstored").value;
    console.log(numberstored);
    contract.methods.SaveNumberData(numberstored).send({from: accounts[0]});
    console.log(numberstored);
} 

  function GetNumberData() {
    //contract call naar de sol contract
    contract.methods.GetNumberData().call().then( function( Numberss ) {
      console.log("this is the stored number: ", Numberss);
      document.getElementById('Numberss').innerHTML = Numberss;
    });
  }
  //voor de navigatie
  $(document).ready(function () {

    $('.navbar .dropdown-item').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({"top": -999, "left": -999});
            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

});