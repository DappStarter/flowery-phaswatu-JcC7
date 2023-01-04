require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note script around inflict roast fringe twice'; 
let testAccounts = [
"0x2dd0e30e9c5a94d6b4721be155c08bb86e559c23dd739c3b1983f06e4ae75791",
"0xa19bb6d6e3059aa25c0ccc2bd123b7156474c63b5bcaecb20591c05e0cdd3597",
"0x725c1d8642ffdaa828c7e242f73649b57ba530f2ab35b2312c19499b9aee0908",
"0x7ce8117a3c93e621d8af9cbf81fc01c1c21e509f8396ef44618941b1dba39344",
"0x172e404315c8c65643de0ed344e78cb917c3fc99afc955af9d4fbc536512f498",
"0xc54d811088ce73f0652731dfbb49e0aaf15a207bb9bcbbb19619cd5c799a7775",
"0x9e7b55891164faa0afa042db8c2555ffc0cbf0fce5ef86964c2fc5baf705682a",
"0xb4fd560d4bab1f291b2c80d2aef23f54a69f26e32adf152999fcc1a6dfa9a45c",
"0x2e30788dc741928850eaea48f14c5aee1ecf3bb2cdd1a10247ca482033ccb537",
"0xd77e5a42e8b216f263383b3669e03f6419a930b52cbbe8fb8ebbab0f070e844e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


