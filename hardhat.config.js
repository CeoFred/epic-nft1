require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/e-YPEdUHvGslZNf_nSRS6_rPRVtUwstr',
      accounts: ['7adbd1fe86862889d1997347d58eb3d526aab56b0dc737e50431162805492bf4'],
    },
  },
};