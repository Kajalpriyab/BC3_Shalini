const { deployProxy } = require('@openzeppelin/truffle-upgrades');
var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function(deployer) {
    const SimpleContract = await deployProxy(SimpleStorage, {deployer});
    console.log(`Address of SimpleContract: ${SimpleContract.address}`)
};