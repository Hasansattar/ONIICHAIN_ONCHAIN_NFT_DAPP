import React from "react";
//import { oniiDetails } from "../type/ONIICHAIN";
import Onii from "./Onii";
import {BigNumber} from "ethers";

export interface GaleryItemProp {
    data: any,
    showDetailsFonction: any,
    index: number,
    tokenId: BigNumber
}

const GalleryItem = (props: GaleryItemProp) => {
  let data = props.data;
    //onClick={e => props.showDetailsFonction(e.target as HTMLElement)}
  return (
      <Onii tokenId={props.tokenId} index={props.index} image={data.image} name={data.name}/>

  );
};

export default GalleryItem;
