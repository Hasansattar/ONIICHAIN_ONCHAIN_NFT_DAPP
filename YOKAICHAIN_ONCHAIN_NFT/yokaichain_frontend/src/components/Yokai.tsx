import React, {useState} from "react";
import yokai_eyes from "../media/yokai_eyes.svg";
import {BigNumber} from "ethers";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ItemModal from "./ItemModal";
//import { yokaiAttribute, yokaiDetails } from "../type/YOKAICHAIN";

export interface YokaiProps{

    image: string,
    index: number,
    tokenId: BigNumber,
    width?: number,
    height?:number,
    details:any
}



const Yokai = (props: YokaiProps) => {

    const [modalActivated, setModalActivated] = useState<boolean>(false);

    const showModal = () => {
        setModalActivated(!modalActivated);
    }

    return (
        <>
            {modalActivated ? (<ItemModal tokenId={props.tokenId} index={props.index} image={props.image} details={props.details} showModalFunction={showModal} />):(<></>)}

        <div className="yokai-container">
            <Zoom overlayBgColorEnd="RGBA(18,19,22,0.79)" >

            <img width={props.width+"px"} height={props.height+"px"} id={props.index.toString()} src={props.image}  alt={props.details.name} />
            </Zoom>
           
            <div className="yokai-name">
                <span className="name">~{props.details.name}~</span>{" "}
                <div
                    className="name-hover"
                    onClick={showModal}
                >

                    <img className="link-yokai" src={yokai_eyes} alt="link" />{" "}
                </div>
            </div>
        </div>
        </>
    );
};

export default Yokai;