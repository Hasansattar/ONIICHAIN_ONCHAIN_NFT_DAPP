import YokaiTitle from "../components/YokaiTitle";
import React, { useEffect, useState } from "react";
import { useYokaiChainContract,useYokaiHeroesContract } from "../hooks/useContract";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
//import YokaiHeroesManager, { yokaiDetails } from "../type/YOKAICHAIN";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryItem from "../components/GalleryItem";
import loader from "../media/loader.svg";
import styled from "styled-components";
import {LoaderImg} from "./Mint";

const Gallery = () => {
  let contrat = useYokaiChainContract();
  let provider = useWeb3React<Web3Provider>();
  let [yokaiDetails, setYokaiDetails] = useState<any[]>([]);
  let [ids, setIds] = useState<BigNumber[]>([]);
  let [hasMore, setHasMore] = useState<boolean>(true);
  let [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const firstLoadNumber = 30;

  let heroesContract = useYokaiHeroesContract();
  //let [heroesIds, setHeroesIds] = useState<BigNumber[]>([]);
  let [yokaiHeroesDetails, setYokaiHeroesDetails] = useState<any[]>([]);

  const getIdsHeroes = async () => {
    const balance = await heroesContract?.balanceOf(provider.account!);
    let ids:BigNumber[] = [];
    if(!balance || balance.isZero()) return ids;
    for(let i = 0; i< balance.toNumber();i++){
      let id = await heroesContract?.tokenOfOwnerByIndex(provider.account!,i);
      if(id)
      ids.push(id);
    }
    return ids;
  };

  useEffect(() => {
    async function getTokens() {
      let details: any[] = [];
      if(!provider || !provider.account) return;
      let idsTemp = await contrat?.getIds(provider.account);
      let heroesIds = await getIdsHeroes();
      if (!idsTemp) return;
      if(idsTemp.length == 0) {
        setHasMore(false);
        setIds(idsTemp);
        setYokaiDetails(details);
        setHasLoaded(true);

        //setHeroesIds(heroesIds);
        return;
      }
      let toReverse = [...idsTemp];
      let idsReversed = toReverse.reverse();
      setIds(idsReversed);

      if(idsTemp.length < firstLoadNumber)
        setHasMore(false);

      if(idsTemp.length == firstLoadNumber)
        hasMore = true;

      for (let i = 0; i < Math.min(firstLoadNumber, idsReversed.length); i++) {
        let tokenDataBase64 = await contrat?.tokenURI(BigNumber.from(idsReversed[i]));
        let bufJson = Buffer.from(tokenDataBase64!.substring(29), "base64");
        let jsonObj = JSON.parse(bufJson.toString()) ;
        details.push(jsonObj);
      }
      setYokaiDetails(details);

      let heroesDetails: any[] = [];
      for(let yokaiHeroesId of heroesIds){
        let tokenDataBase64 = await heroesContract?.tokenURI(yokaiHeroesId);
        let bufJson = Buffer.from(tokenDataBase64!.substring(29), "base64");
        let jsonObj = JSON.parse(bufJson.toString()) ;
        heroesDetails.push(jsonObj);
      }

      setYokaiHeroesDetails(heroesDetails);
      setHasLoaded(true);
    }

    getTokens();
  }, [provider.account, setYokaiDetails]);

  // const showDetailsOf = (div: HTMLElement) => {
  //   let that = div;
  //   let actives = Array.from(document.getElementsByClassName("active"));
  //   let active = actives.find(x => x.tagName === "IMG");
  //   if (active) active.classList.remove("active");
  //   that.classList.add("active");
  //
  //   let id = parseInt(that.id);
  //   let details = yokaiDetails[id];
  //   console.log(details);
  //
  //   let detailBox = document.createElement("div");
  //   detailBox.classList.add("detail");
  //   detailBox.append(document.createElement("div"));
  //   detailBox.append(document.createElement("div"));
  //
  //   let detailsBox = document.getElementsByClassName("details")[0];
  //
  //   while (detailsBox.childNodes.length > 0) {
  //     detailsBox.removeChild(detailsBox.lastChild!);
  //   }
  //
  //   if (details?.attributes.length == 0) return;
  //   const firstAttribute = details.attributes[0];
  //   let first = true;
  //   for (const attribute of details.attributes) {
  //     if (first) {
  //       first = false;
  //       continue;
  //     }
  //     let currentAttribute = detailBox.cloneNode(true);
  //     (currentAttribute.firstChild! as HTMLSpanElement).innerText = attribute.trait_type;
  //     (currentAttribute.lastChild! as HTMLSpanElement).innerText = attribute.value;
  //     detailsBox.appendChild(currentAttribute);
  //   }
  //
  //   detailBox.firstElementChild!.innerHTML = firstAttribute!.trait_type;
  //   detailBox.lastElementChild!.innerHTML = firstAttribute!.value;
  // };

  const fetchData = () => {
    console.log("fetch data");
    if (!provider.account) {
      hasMore = false;
      return;
    }

    async function fetchAsync() {
      let alreadyLoaded = yokaiDetails.length;
      if (!ids) return;
      let details: any[] = [...yokaiDetails];
      let remaining = ids.length - alreadyLoaded;
      console.log("alreadyLoaded :" + alreadyLoaded + "remaining:" + remaining);
      if (remaining == firstLoadNumber || remaining == 0) {
        setHasMore(false);
        return;
      }

      for (let i = 0; i < Math.min(firstLoadNumber, remaining); i++) {
        console.log(ids[alreadyLoaded - 1 + i]);
        let tokenDataBase64 = await contrat?.tokenURI(BigNumber.from(ids[alreadyLoaded - 1 + i]));
        let bufJson = Buffer.from(tokenDataBase64!.substring(29), "base64");
        let jsonObj = JSON.parse(bufJson.toString()) ;

        details.push(jsonObj);
      }

      console.log(details);
      setYokaiDetails(details);
    }

    fetchAsync();
  };

  /*
  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.value.length > 0)
          setYokaiDetailsFiltered(yokaiDetailsBase.filter((x) => mapMethod(x,event.target.value)));

      let actives = Array.from(document.getElementsByClassName("active"));
      let active = actives.find(x => x.tagName === "IMG");
      if(active)
          showDetailsOf(active as HTMLElement);
  }

  const mapMethod = (detail: yokaiDetails, criteria: string): boolean =>{
      let shouldBeIncluded = false;
      let criteriaLower = criteria.toLowerCase();
      shouldBeIncluded = detail.attributes.some((x) => {
          return x.value.toLowerCase().includes(criteriaLower);
      })
      if(detail.name.toLowerCase().includes(criteriaLower))
          shouldBeIncluded = true;

      if(detail.description.toLowerCase().includes(criteriaLower))
          shouldBeIncluded = true;

      return shouldBeIncluded;
  }*/

  return (
    <div className="collection">
      <YokaiTitle>Collection</YokaiTitle>

      <style>{"\
                .bg-illustration.bottom{\
                  display:none;\
                }\
              "}</style>
      <p> Click the Yokai name to show its details.</p>
      {provider.account ? (
        <div className={"gallery-container"}>
          {!hasLoaded?(<LoaderImg src={loader} />):(<></>)}
          {!hasMore &&hasLoaded && yokaiDetails.length == 0 ? (
          <div style={{textAlign:"center", color:"white"}}>You have no yokais</div>
          ):(<></>)}
          <InfiniteScroll
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader src={loader} height="87px" width="100%" />}
            scrollableTarget="wrap"
            dataLength={yokaiDetails.length}
            style={{width: "100%"}}
          >
            <div className={"gallery"}>
              {yokaiDetails.map((x, i) => (
                <GalleryItem tokenId={ids[i]} data={x} key={i.toString()} index={i} />
              ))}
            </div>
          </InfiniteScroll>
          <InfiniteScroll
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader src={loader} height="87px" width="100%" />}
            scrollableTarget="wrap"
            dataLength={yokaiHeroesDetails.length}
            style={{width: "100%"}}
          >
            <div className={"gallery"}>
              {yokaiHeroesDetails.map((x, i) => (
                <GalleryItem tokenId={ids[i]} data={x} key={i.toString()} index={i} />
              ))}
            </div>
          </InfiniteScroll>
          {/*<div className={"details"} />*/}
        </div>
      ) : (
        <NotConnected>You are not connected...</NotConnected>
      )}
    </div>
  );
};

export const NotConnected = styled.div`
  text-align: center;
  font-size: 16px;
  color: white;
  font-weight: 400;
  margin-top: 40px;
  opacity: 0.8;
`;

export const Loader = styled.img`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default Gallery;
