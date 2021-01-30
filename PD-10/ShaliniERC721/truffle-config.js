const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret")
.toString().trim(); // contains mnemonic
const infuraKey = fs.readFileSync(".infura")
.toString().trim(); // infura key

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
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/11166025d14e4b2faa06c3bd2d8654e2'),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
};