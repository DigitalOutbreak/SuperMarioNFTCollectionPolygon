const { ethers } = require("hardhat");

async function main() {

  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorld = await SuperMarioWorld.deploy(
    "SuperMarioWorldCollection", 
    "SPRME",
    "https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/"
    );

  await superMarioWorld.deployed();
  console.log("Success! Contract was depployed to: ", superMarioWorld.address);

  await superMarioWorld.mint(10) // 1 Mario
  await superMarioWorld.mint(10) // 2 Luigi
  await superMarioWorld.mint(10) // 3
  await superMarioWorld.mint(10) // 4
  await superMarioWorld.mint(1) // 5 Mario Gold (rare)
  await superMarioWorld.mint(1) // 6 Luigi Gold (rare)
  await superMarioWorld.mint(1) // 7
  await superMarioWorld.mint(1) // 8

  console.log("NFT Succesfully minted");
};


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
