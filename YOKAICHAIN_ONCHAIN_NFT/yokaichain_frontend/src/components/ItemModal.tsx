import React, { PureComponent, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import section from "../media/section.svg";
import section2 from "../media/section - copy.svg";
import hide from "../media/hide-mask.svg";
import styled from "styled-components";
import { BigNumber } from "ethers";
import { PAINTSWAPLINK, YOKAICHAINCONTRACTADDRESS } from "../constants";
//import { yokaiDetails } from "../type/YOKAICHAIN";
import download from "../media/dl_icon.svg";
import artion from "../media/artion_icon.svg";
import svg2Img from "@ferdipret/svg-2-img";

export interface ItemModalProps {
  image: string;
  index: number;
  tokenId: BigNumber;
  showModalFunction: any;
  details: any;

}
const ItemModal = (props: ItemModalProps) => {
  let href = "https://todai.world/asset/" + YOKAICHAINCONTRACTADDRESS + "/" + props.tokenId;
  const [image, setImage] = useState<string>(props.image);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const clickDownloadPng = () => {
    let buf = Buffer.from(image.substring(26), "base64");
    let svg = buf.toString();
    let parser = new DOMParser();
    let doc = parser.parseFromString(svg, "image/svg+xml").documentElement as any as SVGElement;

    svg2Img(doc, {
      width: 420,
      height: 420,
      format: "png",
      backgroundColor: "transparent",
      downloadFileName: "Yokai-" + props.tokenId,
    });
  };

  const clickHideMask = () => {
    let buf = Buffer.from(image.substring(26), "base64");
    let svg = buf.toString();
    let parser = new DOMParser();
    let doc = parser.parseFromString(svg, "image/svg+xml");
    let mask = doc.getElementById("mask");
    if (mask!.style.display == "none") mask!.style.removeProperty("display");
    else mask!.style.display = "none";
    setIsHidden(mask!.style.display == "none");
    let d = document.createElement("document");
    d.appendChild(doc.documentElement);
    setImage("data:image/svg+xml;base64," + Buffer.from(d.innerHTML).toString("base64"));
  };

  const clickBg = (elem: React.MouseEvent<HTMLDivElement>) => {
    let classList = (elem.target as HTMLElement).classList;
    if (classList.contains("modal-bg") || classList.contains("modal-img-bottom") || classList.contains("modal-img"))
      props.showModalFunction();
  };

  return (
    <div className="modal-bg" onClick={e => clickBg(e)}>
      <img className="modal-img " src={section} alt="" />
      <img className="modal-img-bottom" src={section2} alt="" />
      <div className="modal-item">
        <div className="modal-header">
          <div className="modal-title"> ~{props.details.name}~</div>
          <div className="modal-yokai">
            <Zoom overlayBgColorEnd="RGBA(18,19,22,0.79)">
              <img className="modal-yokai-nft" src={image} style={{height:"36vh",marginLeft:"4vh" }} alt="" />
            </Zoom>
            <div className="yokai-tool">
              {/* <div className="yokai-tool-1"> <img className="dl-yokai" src={artion} alt="dl"/> <span className="tooltip-text"> Artion</span> </div> */}
              {isHidden ? (
                <>
                  {" "}
                  <div className="yokai-tool-1">
                    {" "}
                    <img className="dl-yokai hide" src={hide} alt="dl" onClick={clickHideMask} />{" "}
                    <span className="tooltip-text"> Show Yokai Mask</span>{" "}
                  </div>
                </>
              ) : (
                <>
                  <div className="yokai-tool-1">
                    {" "}
                    <img className="dl-yokai " src={hide} alt="dl" onClick={clickHideMask} />{" "}
                    <span className="tooltip-text"> Hide Yokai Mask</span>{" "}
                  </div>
                </>
              )}
              <div className="yokai-tool-1">
                {" "}
                <img className="dl-yokai" src={download} alt="dl" onClick={clickDownloadPng} />{" "}
                <span className="tooltip-text"> Download PNG</span>{" "}
              </div>
            </div>
          </div>

        
        </div>
        {/* <div className="yokai-attributes desktop-only">
          {props.details.attributes && props.details.attributes.map((x, i) => (
            <div className="attributes" key={i}>
              <div className="attribute">{x.trait_type}</div>
              <div>{x.value}</div>
            </div>
          ))}
          {!props.details.attributes ? (<div>{props.details.description}</div>):(<></>)}
        </div> */}

        <a href={href} target="_blank">
          <HoverButton className="main-button discord">View On Todai</HoverButton>
        </a>
      </div>
    </div>
  );
};
const styleHover = `
    -webkit-transition-duration: 0.4s;
    :hover {
      transform: scale(0.95);
    }
    :after {
      transition: all 0.3s;
    }
  `;

const HoverButton = styled.button`
  ${styleHover}
`;

export default ItemModal;
