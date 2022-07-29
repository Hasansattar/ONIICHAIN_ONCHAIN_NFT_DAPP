import React from "react";
import linkIcon from "../media/link_icon.svg";
import {BigNumber} from "ethers";
import {ONIICHAINCONTRACTADDRESS, OPENSEABASELINK} from "../constants";

export interface OniiProps{

    image: string,
    index: number,
    name: string,
    tokenId: BigNumber
}



const Onii = (props: OniiProps) => {
    let href = OPENSEABASELINK + ONIICHAINCONTRACTADDRESS + "/" + props.tokenId;
    return (
        <div className="onii-container">
            <img id={props.index.toString()} src={props.image} alt={props.name} />
            <div className="onii-name">
                <span className="name">{props.name}</span>{" "}
                <a
                    className="name-hover"
                    href={href}
                    target="_blank"
                >
                    Watch on OpenSea <img className="link-onii" src={linkIcon} alt="link" />{" "}
                </a>
            </div>
        </div>
    );
};

export default Onii;