import YokaiTitle from "../components/YokaiTitle";
import React from "react";
import proba from "../media/proba.json";
import CollapsableText from "../components/CollapsableText";

export interface probaItems{
    name: string
    items: probaItem[]
}

export interface probaItem{
    name: string,
    proba: string,
    svg: string
}

const FAQ = () => {

  return (
    <div className={"faq"}>
           <style>{"\
                .bg-illustration.bottom{\
                  display:none;\
                }\
              "}</style>
      <YokaiTitle>F.A.Q</YokaiTitle>
       <div className="questionlist">
       <CollapsableText title={"+ Why deploying on the Fantom Blockchain ?"}>
            <p>Fantom is the best environement to push the limits of NFTs technology, with their super fast transactions, combined to their almost inexistant gas fees,
             we can propose high quality SVGs, generated entirely by Fantom (onchain), and a gamified Ecosystem, with better experience
            and fair prices for users. Enjoy true decentralization of art with Fantom !
            </p>
        </CollapsableText>
        <CollapsableText title={"+ What's the value/utility of a Yokai ?"}>
            <p>A Yokai gain value from its Innovation, like CryptoPunks were one of the first NFTs, Yokai'Chain offer
                the first nextgen NFTs fully built with Fantom. Owning a Yokai grant access to our growing Ecosystem,
                we'll share our future benefits for each Yokai in your wallet. Like a real investor ! And of course you can use this 
                piece of innovation as your profile picture !
            </p>
        </CollapsableText>
        <CollapsableText title={"+ What is on-chain ? why is it so important ?"}>
            <p> While 98% of NFTs Art are stored on IPFS or centralized servers, and generated in a non-transparent way,
                scams sadly happens a lot, like rugs and other malicious manipulation from devs and hackers. 
               <br /> On-chain allow access to a real decentralization of art, from its generation to its storage.
                Everything is written on the Fantom Blockchain in the most immutable way. So your NFT will truly stay unique
                and will remain forever yours.
            </p>
        </CollapsableText>
        <CollapsableText title={"+ What's the price of mint ? "}>
            <p>Mint price is 18 FTM. And we can guarantee that our prices will never exceed 18 FTM, 
         whatever the  release. We want our Ecosystem to be affordable to anyone who believe in the project, with fair and meaningful prices.</p>
        </CollapsableText>
        <CollapsableText title={"+ Why a collection of 8 753 yokai's ?"}>
            <p>The supply limit is made with numbers considered as lucky charms in Asian culture, related with 
                the history of Han characters. You'll probably see them appear a lot throughout your experience with Yokai's, even
                in our smart contrats ! We know how to put the odds on your side ahah!
            </p>
        </CollapsableText>
  
        {/* <CollapsableText title={"+ How can I buy a Yokai ?"}>
            <p>Mint is coming soon in October ! You'll have to mint on the website, 
              and connect your Metamask Wallet to Fantom Opera network.  </p>
        </CollapsableText> */}
       </div>
        
    </div>
  );
};

export default FAQ;
