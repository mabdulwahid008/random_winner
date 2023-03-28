require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  networks:{
    url: process.env.URL,
    accounts: [process.env.PRIVATE_KEY]
  },
  etherscan:{
    apiKey:{
      polygonMumbai: process.env.POLYGONSCAN_KEY
    }
  }
};