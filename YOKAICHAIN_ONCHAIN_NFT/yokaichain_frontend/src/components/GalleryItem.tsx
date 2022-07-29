import React from "react";
//import { yokaiDetails } from "../type/YOKAICHAIN";
import Yokai from "./Yokai";
import {BigNumber} from "ethers";

export interface GaleryItemProp {
    data: any,
    index: number,
    tokenId: BigNumber,

}

const GalleryItem = (props: GaleryItemProp) => {
  let data = props.data;
  let svg = Buffer.from(data.image!.substring(26), "base64").toString();
  let image = svg;
  let d = document.createElement("document");
  let parser = new DOMParser();
  let doc = parser.parseFromString(image, "image/svg+xml");

  let tags = Array.prototype.slice.call(doc.getElementsByTagName("animateTransform"));
    for (const tag of tags) {
        tag.remove();
    }
    d.appendChild(doc.documentElement);
    let buf = Buffer.from(d.innerHTML);
    image = "data:image/svg+xml;base64,"+buf.toString("base64");

  return (
      <Yokai width={240} height={240} tokenId={props.tokenId} index={props.index} image={image} details={data}/>

  );
};

export default GalleryItem;
