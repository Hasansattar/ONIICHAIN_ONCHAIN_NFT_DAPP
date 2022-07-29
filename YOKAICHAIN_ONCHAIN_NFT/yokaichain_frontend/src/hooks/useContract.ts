import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
import { useMemo } from "react";
import { getContract } from "../utils";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import YokaiChain from "../abi/YokaiChainAbi.json";
import YokaiHeroesAbi from "../abi/YokaiHeroesAbi.json";
//import YokaiChainManager  from "../type/YOKAICHAIN";
import { YOKAICHAINCONTRACTADDRESS, YOKAIHEROESMANAGERCONTRACTADDRESS } from "../constants";
//import YokaiHeroesManager from "../type/YOKAICHAIN";

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

export function useYokaiChainContract(withSignerIfPossible?: boolean): any | null {
  return useContract<any>(YOKAICHAINCONTRACTADDRESS, YokaiChain, withSignerIfPossible);
}

export function useYokaiHeroesContract(withSignerIfPossible?: boolean): any | null{
  return useContract<any>(YOKAIHEROESMANAGERCONTRACTADDRESS, YokaiHeroesAbi, withSignerIfPossible);
}
