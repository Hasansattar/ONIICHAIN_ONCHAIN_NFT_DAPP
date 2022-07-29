import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import iconEye from "../../media/overview_icon.svg";
import iconMint from "../../media/mint_icon.svg";
import iconGalery from "../../media/yokais_icon.svg";
import iconItems from "../../media/items_icon.svg";
import iconEcosystem from "../../media/icon_ecosystem.svg";
import iconInfo from "../../media/info_icon.svg";
import rarity from "../../media/rarity_icon.svg";
import todai from "../../media/todai_icon.svg";
import iconClaim from "../../media/claim_icon.svg";
import universe from "../../media/yokai_verse.svg";
import { NavLink } from "react-router-dom";
import iconDiscord from "../../media/discord_icon.svg";
import iconOpenSea from "../../media/opensea_icon.svg";
import iconTwitter from "../../media/twitter_icon.svg";
import iconMedium from "../../media/medium_icon.svg";
import iconEth from "../../media/eth_icon.svg";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useYokaiChainContract } from "../../hooks/useContract";
import { BigNumber, ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import ConnectButton from "../ConnectButton";
import {shortenAddress} from "../../utils";
import {useWeb3React as useWeb3ReactCore} from "@web3-react/core/dist/provider";
import styled from "styled-components";
import YokaiTitle from "../YokaiTitle";
import menubarToggler from "../../media/menubarToggler.svg";

const SideBar = () => {
  let location = useLocation();
  let pathname = location.pathname;
  let isOnOverview = pathname.includes("Overview");
  let isOnMint = pathname.includes("Mint");
  let isOnEcosystem = pathname.includes("Ecosystem");
  let isOnGallery = pathname.includes("Gallery");
  let isOnFAQ = pathname.includes("FAQ");
  let isOnItems = pathname.includes("Items");
  let isOnRarityboard = pathname.includes("Rarityboard");
  let isOnClaimRewards = pathname.includes("ClaimRewards");
  let isOnUniverse = pathname.includes("Universe");
  //let yokaiChainContract = useYokaiChainContract();
  //let [yokaiMinted, setYokaiMinted] = useState<string>();
  //let [yokaiUnitPrice, setYokaiUnitPrice] = useState<string>();
  let web3Provider = useWeb3React();

  // useEffect(() => {
  //   const getTotalSupplyAndPrice = async () => {
  //     if (!web3Provider.account) return;
  //     let yokaiMinted = await yokaiChainContract?.totalSupply();
  //     if (yokaiMinted) setYokaiMinted(yokaiMinted!.toString());
  //
  //     let unitPrice = await yokaiChainContract?.unitPrice();
  //     if (unitPrice) {
  //       let etherValue = ethers.utils.formatEther(unitPrice);
  //       //setYokaiUnitPrice(etherValue);
  //     }
  //   };
  //   getTotalSupplyAndPrice();
  // }, [web3Provider.account]);

  const [toggled, setToggled] = useState<boolean>(true);

  let body = document.body;
  body.onclick = (event) =>{
    if (event.x > 220 && toggled && body.clientWidth < 600)
      toggleMenuBar();
  }

  const toggleMenuBar = () =>{
    let sideBar = document.getElementsByClassName("sidebar")[0] as HTMLDivElement;
    if(sideBar.classList.contains("toggled-down")){
      sideBar.classList.remove("toggled-down");
      setToggled(true);
    }else {
      sideBar.classList.add("toggled-down");
      setToggled(false);
    }
  }

  return (
      <>
        {toggled ? (
            <></>
        ):
            (
                <img  style={{ position:"fixed", marginTop:"15px",marginLeft:"15px",zIndex:10,opacity:0.9 }} src={menubarToggler} id={"toggler"} alt="toggler" className="mobile-only" onClick={toggleMenuBar}/>
            )}
    <ProSidebar className="sidebar" style={{minWidth: "240px", width:"240px"}}>
      <SidebarHeader><YokaiTitle>Chain</YokaiTitle></SidebarHeader>
      <Menu className="sidebar-inner" iconShape="square">
        <MenuItem active={isOnOverview}>
          <img src={iconEye}></img>
          <NavLink exact to="Overview">
            OVERVIEW
          </NavLink>
        </MenuItem>
        <MenuItem active={isOnRarityboard}>
          <img src={todai}></img>
          <a href="https://todai.world" target="_blank">
            TODAI 
          </a>
        </MenuItem>
        {/* <MenuItem active={isOnEcosystem}>
          <img src={iconEcosystem}></img>
          <NavLink exact to="Ecosystem">
           ECOSYSTEM
          </NavLink>
        </MenuItem> */}
        <MenuItem active={isOnMint}>
          <img src={iconMint}></img>
          <NavLink exact to="Mint">
            MINT 
          </NavLink>
        </MenuItem>
    
        <MenuItem active={isOnGallery}>
          <img src={iconGalery}></img>
          <NavLink exact to="Gallery">
         MY COLLECTION 
          </NavLink>
        </MenuItem> 
        
        {/* <MenuItem active={isOnUniverse}>
          <img src={universe}></img>
          <NavLink exact to="Universe">
            YOKAI'VERSE
          </NavLink>
        </MenuItem> */}
    
        <MenuItem active={isOnClaimRewards}>
          <img src={iconClaim}></img>
          <NavLink exact to="Gallery">
          <i style={{color:"gray"}}>CLAIM REWARDS [soon]</i>
          </NavLink>
          </MenuItem>
     
          <MenuItem active={isOnItems}>
          <img src={iconItems}></img>
          <NavLink exact to="Items">
           ITEM LIST
          </NavLink>
        </MenuItem>
        <MenuItem active={isOnFAQ}>
          <img src={iconInfo}></img>
          <NavLink exact to="FAQ">
            FAQ
          </NavLink>
        </MenuItem>
        
      </Menu>
      <div style={{display:"flex",justifyContent:"center",margin:"auto"}}>
        {!web3Provider.active ? (
            <ConnectButton className="button connect"></ConnectButton>
        ) : (
            <UnclickButton className="button connected ">{shortenAddress(web3Provider.account)}</UnclickButton>
        )}
      </div>
      <div className={"footer"}>

        {/* <div className={"data"}>
        <div className="yokai">
            {yokaiMinted ?? "-"} <span>Yokai's Minted</span>
          </div> 
        </div> */}
        
        <div className={"media"}>
       
          <a href={"https://discord.gg/9rjrgU4uXp"} target="_blank">
            <button>
              <img src={iconDiscord} />
            </button>
          </a>
          <a href={"https://twitter.com/yokaichain"} target="_blank">
            <button>
              <img src={iconTwitter} />
            </button>
          </a>
          <a href={"https://medium.com/@todaiworld"} target="_blank">
            <button>
              <img src={iconMedium} />
            </button>
          </a>
        </div>
      </div>
    </ProSidebar>
      </>
  );
};

const UnclickButton = styled.button`
    pointer-events: none;
  `;

export default SideBar;
