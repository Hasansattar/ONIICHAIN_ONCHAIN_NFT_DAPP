
export enum SupportedChainId {
  MAINNET = 1,
  RINKEBY = 4
}

export const NETWORK_LABELS: { [chainId in SupportedChainId | number]: string } = {
  [SupportedChainId.MAINNET]: "Mainnet",
  [SupportedChainId.RINKEBY]: "Rinkeby",
};
