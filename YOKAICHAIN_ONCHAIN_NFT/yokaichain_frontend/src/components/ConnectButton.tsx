import {injected} from "../connectors";
import {SupportedChainId} from "../data/chains";
import MetaMaskIcon from "../media/MetaMask_icon.svg";
import React, {useState} from "react";
import menubarToggler from "../../media/menubarToggler.svg";
import styled from "styled-components";
import { useWeb3React as useWeb3ReactCore,UnsupportedChainIdError } from "@web3-react/core";

export interface ConnectButtonProps{
    className: string
}

export interface WindowChain{
    ethereum?: {
        isMetaMask?: true
        request?: (...args: any[]) => Promise<void>
    }
}

const ConnectButton = (props: ConnectButtonProps) => {
    const { activate, account, active,connector } = useWeb3ReactCore();



    return (<HoverButton
        id={"connectButton"}
        className={"button connect " + props.className}
        onClick={async () => {
            await activate(injected,(error: Error) => {
                if (error instanceof UnsupportedChainIdError) {
                    let er = error as UnsupportedChainIdError;
                    const provider = (window as WindowChain).ethereum as any;
                    setTimeout(async () =>{
                        await provider.request!({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: '0x'+ SupportedChainId.RINKEBY.toString(16),
                                    // chainId: '0x'+ SupportedChainId.FANTOM.toString(16),
                                },
                            ],
                        })

                    })
                }

            });
        }}
    >
        {" "}
        Connect Wallet 
    </HoverButton>)
};
const HoverButton = styled.button`
    -webkit-transition-duration: 0.4s;
    :hover {
      transform: scale(0.95);
    }
    :after {
      transition: all 0.3s;
    }
  `;
export default ConnectButton;
