// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "9aa3d95b3bc440fa88ea12eaa4456161";
//Oniichain
//  export const ONIICHAINCONTRACTADDRESS = "0x1b21a5F01Df4710111b98F50B990f7ce143c3539";
//  export const ERC721BATCHERADDRESS = "0xF83eEE39E723526605d784917b6e38ebCF0f0207";

export const ONIICHAINCONTRACTADDRESS = "0x9E9EDc4D804C235DE4dc90009a169318cfeb16EA";
export const ERC721BATCHERADDRESS = "0xEf99B4F90f0Fc9A585aBCaF8ef58F90D96FF3E5C";

//export const OPENSEALINK = "https://opensea.io/collection/oniichain";
export const OPENSEALINK = "https://testnets.opensea.io/collection/oniichain-qyxoyehgo1";
export const TWITTERLINK = "https://twitter.com/oniichainnft";
export const MEDIUMLINK = "https://oniichain.medium.com/";
export const DISCORDLINK = "https://discord.gg/up4paVmh8b";

//export const OPENSEABASELINK = "https://opensea.io/assets/";

 export const OPENSEABASELINK = "https://testnets.opensea.io/assets/";


export const NETWORKS = {
    mainnet: {
        name: "mainnet",
        color: "#ff8b9e",
        chainId: 1,
        rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
        blockExplorer: "https://etherscan.io/",
    },
    rinkeby: {
        name: "rinkeby",
        color: "#e0d068",
        chainId: 4,
        rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
        faucet: "https://faucet.rinkeby.io/",
        blockExplorer: "https://rinkeby.etherscan.io/",
    },
};

export const NETWORK = chainId => {
    for (const n in NETWORKS) {
        if (NETWORKS[n].chainId === chainId) {
            return NETWORKS[n];
        }
    }
};