const convertLib = artifacts.require('ConvertLib')
const metaCoin = artifacts.require('MetaCoin')

module.exports = (deployer: Truffle.Deployer) => {
	deployer.deploy(convertLib)
	deployer.link(convertLib, metaCoin)
	deployer.deploy(metaCoin)
}
