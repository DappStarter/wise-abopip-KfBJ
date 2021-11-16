require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food bike dash script come coral light army gate'; 
let testAccounts = [
"0x153ce831803817ee67e917ac94fab5fd735d5705378726be408520f02fe09b79",
"0x63aa9e6708e4f62a7820aaf94f18d243a98ff937d9eb3bf0644432b90f4a0bcb",
"0x5dba29173a314c1c81938c2a9587495edb9003c18ff410f195785e20079a512d",
"0x7e4b73d14f799c2c367233d496195ce30900b045a691614dad21fa5bc23d4e06",
"0xd432b7a48fd79d214102eab9a3c815045f9f5287a9a9e0b4c3130ca4166210ab",
"0x4a50a5f87642499c69d6ff791603a87f416326d9cb325eaa2866e2ff71bc02ea",
"0x047a9a3a14ffb15be72f0322ef8f05b305e2f8711348ca4326515ab940637fde",
"0x4974d2bcb28cd644f67c20b2ebde8d64d29f0b4ebc4105c2fc6fa615fe8be6fb",
"0x2f8325d4e2eacccc2000603b435852e140f67c5513a7c4d47d5db6eae0b05a53",
"0xa6058a0bb9aed730dbe2841f1f28e4c00db52a01aee0f0a6136b7e22347317df"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

