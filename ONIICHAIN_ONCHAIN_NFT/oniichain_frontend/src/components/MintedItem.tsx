import React, { useState } from "react";
//import { oniiDetails } from "../type/ONIICHAIN";
import before from "../media/before_mint.svg";
import { useONiiChainContract } from "../hooks/useContract";
import { BigNumber } from "ethers";
//import linkIcon from "../media/link_icon.svg";
//import {ONIICHAINCONTRACTADDRESS, OPENSEABASELINK} from "../constants";
import Onii from "./Onii";



export interface MintedItemProp {
  //data: oniiDetails,
  tokenId: BigNumber;
  index: number;
}

const MintedItem = (props: MintedItemProp) => {
  let oniichainContract = useONiiChainContract();
  let [data, setData] = useState<any>();

  const showTheMint = (event: React.MouseEvent<HTMLImageElement>) => {
    async function getData() {
      console.log("downloading: " + props.tokenId);
      let tokenDataBase64 = await oniichainContract?.tokenURI(BigNumber.from(props.tokenId));
      let bufJson = Buffer.from(tokenDataBase64!.substring(29), "base64");
      let data = JSON.parse(bufJson.toString());
      console.log("data",data)

      setData(data);
    }
    getData();
  };

  return (
    <div>
      {data ? (
          <Onii tokenId={props.tokenId} index={props.index} image={data.image} name={data.name}/>
      ) : (
        <div className="oniis-preview">
          <img onClick={e => showTheMint(e)} id={props.index.toString()} src={before} alt={"??"} />
          <span>?</span>
        </div>
      )}
    </div>
  );
};

export default MintedItem;
