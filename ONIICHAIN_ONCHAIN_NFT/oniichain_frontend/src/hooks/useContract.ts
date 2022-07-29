import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
import { useMemo } from "react";
import { getContract } from "../utils";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import OniiChainAbi from "../abi/OniiChainAbi.json";
//import OniiChainManager, { ERC721Batcher } from "../type/ONIICHAIN";
import ERC721BatcherAbi from "../abi/ERC721BatcherAbi.json";
import { ERC721BATCHERADDRESS, ONIICHAINCONTRACTADDRESS } from "../constants";

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> {
  const context = useWeb3ReactCore<Web3Provider>();
  // console.log(context)
  // const contextNetwork = useWeb3ReactCore<Web3Provider>("NETWORK")
  // console.log(contextNetwork)
  return context;
}

export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { library, account, chainId } = useActiveWeb3React();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
    let address: string | undefined;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T;
}

export function useONiiChainContract(withSignerIfPossible?: boolean): any | null {
  return useContract<any>(ONIICHAINCONTRACTADDRESS, OniiChainAbi, withSignerIfPossible);
}

export function useERC721BatcherContract(withSignerIfPossible?: boolean): any | null {
  return useContract<any>(ERC721BATCHERADDRESS, ERC721BatcherAbi, withSignerIfPossible);
}
