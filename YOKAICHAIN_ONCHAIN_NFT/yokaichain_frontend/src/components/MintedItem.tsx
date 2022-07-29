import React, { useState } from "react";
//import { yokaiDetails } from "../type/YOKAICHAIN";
import mintPreview from "../media/YokaiMintPreview.jpg";
import { useYokaiChainContract } from "../hooks/useContract";
import { BigNumber } from "ethers";
import Yokai from "./Yokai";

export interface MintedItemProp {
  //data: yokaiDetails,
  tokenId: BigNumber;
  index: number;
}

const MintedItem = (props: MintedItemProp) => {
  let yokaichainContract = useYokaiChainContract();
  let [data, setData] = useState<any>();

  const showTheMint = (event: React.MouseEvent<HTMLImageElement>) => {
    async function getData() {
      console.log("downloading: " + props.tokenId);
      let tokenDataBase64 = await yokaichainContract?.tokenURI(BigNumber.from(props.tokenId));
      let bufJson = Buffer.from(tokenDataBase64!.substring(29), "base64");
      let data = JSON.parse(bufJson.toString());

      setData(data);
    }
    getData();
  };

  return (
    <div className="minted-yokai-container">
      {data ? (
          <Yokai tokenId={props.tokenId} index={props.index} image={data.image} details={data} />
      ) : (
        <div className="yokais-preview">
          <img onClick={e => showTheMint(e)} id={props.index.toString()} src={mintPreview} alt={"??"} height={240} width={240} />
          <span>?</span>
        </div>
      )}
    </div>
  );
};

export default MintedItem;
