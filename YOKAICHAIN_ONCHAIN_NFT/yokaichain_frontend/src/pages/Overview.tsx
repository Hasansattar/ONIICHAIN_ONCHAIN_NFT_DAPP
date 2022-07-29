import React from "react";
import NftPreview from "../media/NftPreview.png";
import "react-pro-sidebar/dist/css/styles.css";
import YokaiTitle from "../components/YokaiTitle";
import iconDiscord from "../media/discord_icon.svg";
import iconOpenSea from "../media/opensea_icon.svg";
import iconTwitter2 from "../media/twitter_icon2.svg";
import iconArtion from "../media/artion_icon.svg";
import GitHub from "../media/git.svg";
import iconMedium from "../media/medium_icon.svg";
import backgrounds from "../media/backgrounds.svg";
import yokaieyes from "../media/yokai_eyes.svg";
import bamboo from "../media/bamboo.svg";
import transition from "../media/transition.svg";
import spin from "../media/spin.svg";
import coin from "../media/coin.svg";
import section from "../media/section.svg";
import line from "../media/line.svg";
import spin2 from "../media/spin2.svg";
import iconInsta from "../media/insta_icon.svg";
import todai from "../media/todai_icon.svg";
import iconLink from "../media/link_icon.svg";
import chain from "../media/chain.svg";
import rare from "../media/rare.svg";
import gear from "../media/gear.svg";
import rarre from "../media/rarre.svg";
import avatarAxe from "../media/axxe_avatar.png";
import visualnovel from "../media/visualnovel.svg";
import visualnovelmap from "../media/visualnovelmap.svg";
import avatarTori from "../media/tori_avatar.png";
import yokaisgif from "../media/yokais.gif";
import discover from "../media/discover.svg";
import paintswapIcon from "../media/paintswap_icon.svg";
import { NavLink } from "react-router-dom";
import avatarMetal from "../media/metal_avatar.png";
import styled from "styled-components";
import { DISCORDLINK, MEDIUMLINK, TWITTERLINK } from "../constants";
import features from "../media/feature_light.png";
import OpenSea from "../media/opensea_overview.svg";
//import MintTitle from "../components/MintTitle";
import bloodmoon from "../media/bloodmoon.svg";
import texture1 from "../media/texture1.svg";
import toriiuniverse from "../media/torii-universe.png";
import cards from "../media/cards.svg";

const Overview = () => {
  return (
    <>
      <div className="overview">
        <section className="overview-hero">
          <img className="spin" src={spin} alt="eyes" />

          <img className="spin" src={spin2} alt="eyes" />
          <div className="overview-presentation">
            <div>
              {" "}
              <h1 className="overview-title">
                Enter a Folkloric Universe.
                <br /> Where mystic entities are breaking the NFTs standards.
              </h1>
              <p>
                With the most advanced 100% On-Chain NFTs ever generated !
                <br /> Only on Fantom{" "}
              </p>
            </div>

            <div className="overview-buttons">
              <NavLink exact to="Mint">
                <HoverButton className="main-button discord"> Mint my first Yokai !</HoverButton>
              </NavLink>
              <a href="https://todai.world" target="_blank">
                <HoverButton className="main-button discord">
                  {" "}
                  Discover Todai <img src={iconLink} alt="" />
                </HoverButton>
              </a>
            </div>
            <a href="https://todai.world/Collection/0x59c7b16369422959eeb218c7270e3b5132cb1f28 " target="_blank">
              <HoverButton className="main-button paintswap-link">
                <img src={todai} alt="todai" /> Yokai Collection
              </HoverButton>
            </a>
          </div>
          {/* <h1 className="teaser">Collection of 14.000 Yokai's living on Fantom, coming this October.</h1> */}
          <img className="discover eyes" src={yokaieyes} alt="eyes" />
          <div className="discover see"> ~See More~ </div>
          <img className="discover" src={discover} alt="discover" />
        </section>
        {/* <video width="auto" height="auto" autoPlay loop >
          <source src={YokaiTrailer} type="video/ogg"/>
          </video> */}
        <section className="features">
          <img className="sections" src={section} alt="" />
          <h1>Bringing valuable innovation to NFTs, powered by Fantom.</h1>
          <div className="feature-list">
            <div className="feature">
              <img src={chain} alt="" />
              <span>
                <i> Fully On-Chain</i>{" "}
                <p>
                  {" "}
                  Every single phases of the mint are happening on-chain, and stored directly on Fantom, rugs finally
                  made impossible !
                </p>
              </span>
            </div>

            <div className="feature">
              <img src={rarre} alt="" />
              <span>
                <i>Provably Rare</i>{" "}
                <p>
                  Each items has its probability to appear engraved on Yokai's smart contracts, with a total
                  transparency.{" "}
                </p>
              </span>
            </div>
            <div className="feature">
              <img src={coin} alt="" />
              <span>
                <i> Passive Incomes</i>{" "}
                <p>
                  Stake your Yokai, to active your ecosystem benefits, eligibility to
                  NFTs/Token airdrops.
                </p>
              </span>
            </div>
            <div className="feature">
              <img src={rare} alt="" />
              <span>
                <i>High Quality SVGs</i>
                <p>
                  {" "}
                  Yokai's are carefuly designed and optimized with unique technologies, to get the best onchain visuals
                  ever generated.
                </p>{" "}
              </span>
            </div>
            <div className="feature">
              <img src={backgrounds} alt="" />
              <span>
                <i>Background Rarity</i>{" "}
                <p>
                  {" "}
                  Every Yokai's receive a rarity score, indicated by 8 different backgrounds levels. ALL Ranked on a
                  dedicated Leaderboard.
                </p>
              </span>
            </div>
            <div className="feature">
              <img src={visualnovel} alt="" />
              <span>
                <i>On-Chain Games</i>{" "}
                <p>
                  {" "}
                  Get your Yokai in unique decentralized game experiences, trading cards, visual novels, like you never
                  seen berfore.
                </p>
              </span>
            </div>
          </div>
        </section>
        <img width="100%" src={line} alt="" />
        {/* <img className="transition" src={transition} alt="" /> */}
        <section className="vision">
          <h1>Collect Yokai's and invest in the first NFT Ecosystem of its kind.</h1>
          <div className="yokai-intro">
            <img className="yokaigif" src={yokaisgif} alt="discover" />
            <div>
              <p className="intro">
                {" "}
                <i>Todai</i> is building an <i>innovative NFT Ecosystem</i>, where you'll find unique technologies,
                gamified experiences, powerful tools, everything gathered in an ambitious and folkloric universe.
                <br /> <br />
                Begin the adventure by collecting Yokai's, our first piece of innovation, and become a{" "}
                <i>original adopter</i> of the ecosystem. For each Yokai you own, you'll get a part of every single
                profit generated by the ecosystem, get access to <i>exclusives premium features/collections</i>, and
                eligibility to various exciting airdrops.
                <i></i>
                <br /> <br />
                Mint a Yokai and get involved in <i>NextGen NFTs technologies</i>, powered by Fantom.
              </p>
            </div>
          </div>
        </section>
        <img width="100%" src={line} alt="" />
        <h1>What's on the Menu...</h1>

        <section className="roadmap ">
          <img className="bamboo desktop-only" src={bamboo} alt="bamboo" />

          <div className="roadmap-list">
            <div className="map">
              <img src={bloodmoon} alt="" />
              <span>
                <i> Yokai : BloodMoon Edition</i>{" "}
                <p>
                  {" "}
                  The story begin with 8753 Yokai's. Owning Yokai's, get you access to our growing Ecosystem, as a
                  original adopter. Including exclusive advantages/accessibily, passive incomes/rewards, airdrops... and
                  way more as the Ecosystem expand.
                  <br />
                  {/* <a className="" href="">Learn More</a> */}
                </p>
              </span>
            </div>
            <img className="next" src={discover} alt="" />
            <div className="map">
              <img src={visualnovelmap}  alt="" />
              <span>
                <i>Todai NFT Platform</i>{" "}
                <p>
                  {" "}
                  Building a unique App with powerful tools for NFTs on Fantom, such as a advanced NFT search engine,
                  rarity ranking, collectors profile, stats overview... <br />A Governance system will be implemented
                  with Yokai's NFTs.
                  {/* <a className="" href="">Learn More</a> */}
                </p>
              </span>
            </div>

            <img className="next" src={discover} alt="discover" />
            <div className="map">
              <img src={cards} alt="" />
              <span>
                <i>Yokai Card Game</i>
                <p>
                  {" "}
                   Time to play ! Discover a card game with unique mechanics never seen before. Challenge 
                    other players and win their NFTs. LeaderBoard with rewards. <br/>
                  <br />
                  {/* <a className="" href="">Learn More</a> */}
                </p>
              </span>
            </div>
           
            <img className="next" src={discover} alt="" />
            <div className="map">
              <img src={toriiuniverse} alt="" />
              <span>
                <i> Exploring the Yokai Universe</i>
                <p>
                  {" "}
                  We'll introduce the Yokai's background story, and together with the community, we'll build their
                  future in the Yokai'Verse. The ultimate goal is to create the first 100% On-Chain Comics. The next
                  Best-Seller. <br />
                  {/* <a className="" href="">Learn More</a> */}
                </p>
              </span>
            </div>
            <img className="next" src={discover} alt="discover" />
            <div className="map">
              <img src={gear} alt="" />
              <span>
                <i>Yokai'Gear</i>{" "}
                <p>
                  {" "}
                  Derivatives and Merch are also coming, get access to exclusive collections for free, with unique
                  weapons, masks, and more... We'll also do our best to bring the best Goodies to life, with special
                  surprises for Yokai's owners.
                  <br />
                  {/* <a className="" href="">Learn More</a> */}
                </p>
              </span>
            </div>
           
            <p style={{ textAlign: "center", opacity: "0.8", marginBottom: "3vh", fontSize: "1.8vh" }}>
              {" "}
              These main features may evolve with community opinions. <br /> They'll get a dedicated medium for their
              official release.{" "}
            </p>
          </div>
        </section>
        <img width="100%" src={line} alt="" />
        <section className="team">
          <h1>Yokai'Team</h1>
          <p style={{ marginBottom: "3vh", opacity: "0", textAlign: "center" }}>
            Since we're 3, depending on the Community growth and enthusiasm, we're likely to hire new members in the
            team. Stay Tuned.{" "}
          </p>
          <div className="team-showcase">
            <div className="member">
              <img className="team-avatar" src={avatarTori} alt={"Tori avatar"} />
              <div className={"description"}>
                <div className={"name"}>Tori - Artist, UI/UX Designer</div>
              </div>
              <div className={"social"}>
                <a href={"https://artion.io/account/0xC0ABaAa88038BA8C0FbdB502cAb1e4b32915128E"} target="_blank">
                  <HoverImg src={iconArtion} alt={"Artion"} />
                </a>
              </div>
            </div>
            <div className="member">
              <img className="team-avatar" src={avatarAxe} alt={"Axxe avatar"} />
              <div className={"description"}>
                <div className={"name"}>Axxe - Smart Contract Dev</div>
              </div>
              <div className={"social"}>
                <a href={"https://twitter.com/axxedev"} target="_blank">
                  <HoverImg src={iconTwitter2} alt={""} />
                </a>
                <a href={"https://github.com/maximebrugel/"} target="_blank">
                  <HoverImg src={GitHub} alt={""} />
                </a>
              </div>
            </div>
            <div className="member">
              <img className="team-avatar" src={avatarMetal} alt={"Metal avatar"} />
              <div className={"description"}>
                <div className={"name"}>Metal - Software Dev</div>
              </div>
              <div className={"social"}>
                <a href={"https://github.com/AlexandreBazeaud"} target="_blank">
                  <HoverImg src={GitHub} alt={""} />
                </a>
              </div>
            </div>
          </div>
          {/* <a href="https://www.oniichain.com" target="_blank">
          <HoverButton className="main-button discord">Discover the Onii'Chain Project</HoverButton>
          </a> */}

          {/* <section className="overview-medias">
        <div className="medias-link">
         <HoverLink href={TWITTERLINK} target="_blank">
            <img src={iconTwitter} alt={"twitter icon"} />
            Follow us on Twitter
          </HoverLink>
          <HoverLink href={DISCORDLINK} target="_blank">
            <img src={iconDiscord} alt={"discord icon"} />
            Join the community on Discord
          </HoverLink>
          <HoverLink href={MEDIUMLINK} target="_blank">
            <img src={iconMedium} alt="medium icon" />
            Medium documentation
          </HoverLink>
        </div>
          
        </section> */}
        </section>
      </div>
    </>
  );
};

const textEmphasis = {
  color: "#FB59E1",
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

const HoverImg = styled.img`
  ${styleHover}
`;

const HoverLink = styled.a`
  ${styleHover}
`;

export default Overview;
