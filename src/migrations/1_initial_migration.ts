const migrations = artifacts.require('Migrations')

module.exports = (deployer: Truffle.Deployer) => {
	deployer.deploy(migrations)
}
