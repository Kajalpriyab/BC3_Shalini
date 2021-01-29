// From web3examples github: https://github.com/web3examples/ethereum/blob/master/truffle_examples/TestnetDeploy/truffle-config.js
const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret")
    .toString().trim(); // contains mnemonic
const infuraKey = fs.readFileSync(".infura")
    .toString().trim(); // infura key

var adr;

module.exports = {
	compilers: {
		solc: {
			version: "^0.6"
		}
	},

  networks: {
    //development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    //},
	
	rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/1df4f9eeb894428cb32aa4cfa599104b'),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
};