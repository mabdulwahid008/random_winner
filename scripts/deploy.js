const { ethers } = require("hardhat");
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");

async function main() {
  const randomWinner = await ethers.getContractFactory('RandomWinnerGame')

  const deployRandomWinner = await randomWinner.deploy(VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE)

  await deployedRandomWinnerGameContract.deployed();
  console.log("Verify Contract Address: ", deployedRandomWinnerGameContract.address);

  console.log("Sleeping...");

  await sleep(30000);

  await hre.run("verify:verify", {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
