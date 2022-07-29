import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import iconEye from "../../media/overview_icon.svg";
import iconMint from "../../media/mint_icon.svg";
import iconGalery from "../../media/oniis_icon.svg";
import iconItems from "../../media/items_icon.svg";
import iconInfo from "../../media/info_icon.svg";
import { NavLink } from "react-router-dom";
import iconDiscord from "../../media/discord_icon.svg";
import iconOpenSea from "../../media/opensea_icon.svg";
import iconTwitter from "../../media/twitter_icon.svg";
import iconMedium from "../../media/medium_icon.svg";
import iconEth from "../../media/eth_icon.svg";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useONiiChainContract } from "../../hooks/useContract";
import { BigNumber, ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import ConnectButton from "../ConnectButton";
import {shortenAddress} from "../../utils";
import {useWeb3React as useWeb3ReactCore} from "@web3-react/core/dist/provider";
import styled from "styled-components";
import OniiTitle from "../OniiTitle";
import menubarToggler from "../../media/menubarToggler.svg";

const MenuBar = () => {
  let location = useLocation();
  let pathname = location.pathname;
  let isOnOverview = pathname.includes("Overview");
  let isOnMint = pathname.includes("Mint");
  let isOnGallery = pathname.includes("Gallery");
  let isOnInfo = pathname.includes("Info");
  let isOnItems = pathname.includes("Items");
  let oniiChainContract = useONiiChainContract();

  let [oniiMinted, setOniiMinted] = useState<string>();
  let [oniiUnitPrice, setOniiUnitPrice] = useState<string>();
  let web3Provider = useWeb3React();

  useEffect(() => {
    const getTotalSupplyAndPrice = async () => {
      if (!web3Provider.account) return;
      let oniiMinted = await oniiChainContract?.totalSupply();
      if (oniiMinted) setOniiMinted(oniiMinted!.toString());

      let unitPrice = await oniiChainContract?.getUnitPrice();
      if (unitPrice) {
        let etherValue = ethers.utils.formatEther(unitPrice);
        setOniiUnitPrice(etherValue);
      }
    };
    getTotalSupplyAndPrice();
  }, [web3Provider.account]);

  const [toggled,setToggled] = useState<boolean>(true);

  let body = document.body;
  body.onclick = (event) => {

    if(event.x > 220 && toggled && body.clientWidth < 600)
      toggleMenuBar();
  };

  const toggleMenuBar = () => {
    let sideBar = document.getElementsByClassName("sidebar")[0] as HTMLDivElement;
    if(sideBar.classList.contains("toggled-down")) {
      sideBar.classList.remove("toggled-down");
      setToggled(true);
    }
    else {
      sideBar.classList.add("toggled-down");
      setToggled(false);
    }
  }

  return (
    <>{toggled ? (
      <></>
      // <div style={{height:"30px"}}/>
    ):(
      <img  style={{ position:"fixed", marginTop:"15px",marginLeft:"15px" }} src={menubarToggler} id={"toggler"} alt="toggler" className="mobile-only" onClick={toggleMenuBar}/>
    )}
    <ProSidebar className="sidebar" style={{minWidth: "240px", width:"240px"}}>
      <SidebarHeader><OniiTitle>Chain</OniiTitle></SidebarHeader>
      <Menu className="sidebar-inner" iconShape="square">
        <MenuItem active={isOnOverview}>
          <img src={iconEye}></img>
          <NavLink exact to="Overview">
            OVERVIEW
          </NavLink>
        </MenuItem>
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
        <MenuItem active={isOnItems}>
          <img src={iconItems}></img>
          <NavLink exact to="Items">
            ITEM LIST
          </NavLink>
        </MenuItem>
        <MenuItem active={isOnInfo}>
          <img src={iconInfo}></img>FAQ (soon)
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

        <div className={"data"}>
          <div className="onii">
            {oniiMinted ?? "-"} <span>Onii's Minted</span>
          </div>
          {/* <div>8.3K <span>owners</span></div> */}
          <div className="onii price">
            <div>
              <img src={iconEth} height={"14px"} style={{ marginRight: "6px" }} />
              {oniiUnitPrice ?? "-"}{" "}
            </div>
            <span>Onii Price</span>
          </div>
        </div>
        
        <div className={"media"}>
       
          <a href={"https://discord.gg/"} target="_blank">
            <button>
              <img src={iconDiscord} />
            </button>
          </a>
          <a href={"https://twitter.com/"} target="_blank">
            <button>
              <img src={iconTwitter} />
            </button>
          </a>
          <a href={""} target="_blank">
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

export default MenuBar;
