import OniiTitle from "../components/OniiTitle";
import React, {useEffect, useState} from "react";
import { useONiiChainContract } from "../hooks/useContract";
import { BigNumber } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MintedItem from "../components/MintedItem";
import styled from "styled-components";
import loader from "../media/loader.svg";
import minus from "../media/minus_sign.svg";
import plus from "../media/plus_sign.svg";

export enum MintState {
  ToMint,
  Minting,
  Minted,
}

const Mint = () => {
  const textEmphasis = {
    color: "#FF95EE",
  };



  const [toMint, setQty] = useState<number>(1);
  const [tokenIds, setTokenIds] = useState<BigNumber[]>([]);
  let oniichainContract = useONiiChainContract();
  let provider = useWeb3React<Web3Provider>();
  let [minted, setMinted] = useState<MintState>(MintState.ToMint);
  let [ethBalance, setEthBalance] = useState<BigNumber>();
  let [unitPrice, setUnitPrice] = useState<BigNumber>();

  console.log("provider",provider.library?.getSigner())

  useEffect( () =>{
    if(!provider.account) return;
    async function getEthBalance(){
      const ethBalance = await provider.library?.getBalance(provider.account!);
      const unitPrice = await oniichainContract?.getUnitPrice();
      console.log("unitPrice",unitPrice)

      setEthBalance(ethBalance);
      console.log("ethBalance",ethBalance)
      setUnitPrice(unitPrice);
    }
    getEthBalance();
  },[provider.account]);



  const mint = async () => {
    let qty = 1;
    if (toMint) qty = toMint;
    console.log("qty: " + qty);

    //const unitPrice = await oniichainContract?.getUnitPrice();
    if (!unitPrice) return;
    let values = {
      value: unitPrice.mul(qty),
      gasLimit: BigNumber.from(0),
    };
    let signer = provider.library?.getSigner();
    console.log("signer",signer)
    if (!signer) return;
    let estimated = await oniichainContract?.connect(signer).estimateGas.create(BigNumber.from(qty), values);

    values.gasLimit = estimated!.add(estimated!.div(10));

    let tx = await oniichainContract?.create(BigNumber.from(qty), values);
    setMinted(MintState.Minting);

    setTokenIds([]);

    tx!.wait().then(async transaction => {
      console.log(transaction.status);
      let tokenIdsLogs = transaction.logs; //;
      if(transaction.logs.length > toMint)
        tokenIdsLogs = tokenIdsLogs.slice(3,transaction.logs.length);

      let lastTopics = tokenIdsLogs.map(x => x.topics[x.topics.length - 1]);
      let tokenIdsTemp: BigNumber[] = [];
      for (const lastTopic of lastTopics) {
        let tokenId = parseInt(lastTopic);
        tokenIdsTemp.push(BigNumber.from(tokenId));
      }

      setTokenIds(tokenIdsTemp);
      setMinted(MintState.Minted);
    });
  };


  return (
    <>
      <section className="mint">
        <OniiTitle>Mint</OniiTitle>
        <div className="description">
          <div className="quantity">
            <LabelQty>Onii Quantity</LabelQty>

            <div className={"input-quantity"}>
            <button className={"button"} onClick={() => {
              let newQty = toMint - 1;
              if(newQty < 1)
                newQty = 1;
              else if(newQty > 100)
                newQty = 100;
              setQty(newQty);
            }}><img src={minus}/></button>
            <InputNumber
              min={1}
              defaultValue={1}
              max={100}
              id={"qty"}
              onChange={event => {
                if(minted == MintState.Minting) return;
                if (event!.target.value == "") {
                  setQty(1);
                } else if (parseInt(event!.target.value) > 100) {
                  setQty(100);
                 // event!.target.value = 100;
                } else if (parseInt(event!.target.value) < 1) {
                  setQty(1);
                  //event!.target.value = 1;
                } else {
                  setQty(parseInt(event!.target.value));
                }
                 console.log(parseInt(event!.target.value));
                 if(unitPrice && ethBalance)
                   console.log("price: " + unitPrice.mul(parseInt(event!.target.value)) + " - " + ethBalance + " produce: "+ (unitPrice.mul(parseInt(event!.target.value)).gte(ethBalance)));
              }}
              value={toMint}
              type={"number"}
            />
              <button className={"button"} onClick={() => {
                let newQty = toMint + 1;
                if(newQty < 1)
                  newQty = 1;
                else if(newQty > 100)
                  newQty = 100;
                setQty(newQty);
              }}><img src={plus} alt=""/></button>
            </div>
          </div>
             
             {console.log("provider.account",unitPrice && ethBalance && unitPrice.mul(toMint).gte(ethBalance))}
          <div
             
          >
            <HoverButton className={"mint-button"}  onClick={mint}>
              {provider.account ? unitPrice && ethBalance && unitPrice.mul(toMint).gte(ethBalance) ? "Insufficient balance" :"Mint "+toMint+" Onii's" : "New Edition in December"}
            </HoverButton>
          </div>
          {/* <button onClick={test}>Simulate Mint</button> */}
        </div>
      </section>


      <section className={"minted"}>
        {/* <p>Click the Onii title to watch it on OpenSea, refresh the page before minting again</p> */}
        {minted == MintState.Minting && (
            <LoaderImg src={loader} />
        )}
        {minted == MintState.ToMint && (
            <ToMintText>Generated Onii's are displayed here</ToMintText>
        )}
        {console.log("tokenIds",tokenIds)}
        <div className="minted-inner">
          {tokenIds && tokenIds.length > 0 && (
            tokenIds.map((x, i) => <MintedItem tokenId={x} index={i} key={i.toString()} />)
          )}
        </div>
      </section>
    </>
  );
};
const HoverButton = styled.button`
    -webkit-transition-duration: 0.4s;
    :hover {
      transform: scale(0.97);
    }
    :after {
      transition: all 0.2s;
    }
  `;

const InputNumber = styled.input`
  width: 52px;
  height: 28px;
  //font-size: 20px;
  vertical-align: bottom;
  //margin-left: 10px;
  background-color: #282136;
  border: #282136;
  font-family: "Roboto";
  font-weight: 500;
  //padding-right: 5px;
  text-align: center;
  //padding-left: 5px;
  color: white;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  :focus {
    outline: 0;
  }
`;

const LabelQty = styled.label`
  align-self: center;
`;

export const LoaderImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  //grid-column: 3;
  //grid-row: 8;
  height: 100px;
  width: 100px;
  justify-content: center;
  text-align: center;
  display: flex;
`;

export const ToMintText = styled.p`
  //left: 53%;
  //position: absolute;
  //top: 50%;
  text-align: center;
  font-size: 18px !important;
`;

export default Mint;
