// import {InjectedConnector} from "@web3-react/injected-connector";
// import {SupportedChainId} from "../data/chains";

// const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
//   SupportedChainId.FANTOM
// ];

// export const injected = new InjectedConnector({
//   supportedChainIds: SUPPORTED_CHAIN_IDS,
// });


import { InjectedConnector } from "@web3-react/injected-connector";
import { SupportedChainId } from "../data/chains";

const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
  SupportedChainId.RINKEBY,
];

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});