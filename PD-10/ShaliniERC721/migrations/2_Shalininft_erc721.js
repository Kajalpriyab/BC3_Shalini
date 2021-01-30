const Shalininft = artifacts.require("Shalininft");

module.exports = async function(deployer) {
await deployer.deploy(Shalininft);
const Shalininfts= await Shalininft.deployed();
Shalininfts.CreateShalininft('0xb9A57E2576618A9129CF37b3CCfbF01aeDf7DB7e', 'https://jsonkeeper.com/b/5CCZ');
};