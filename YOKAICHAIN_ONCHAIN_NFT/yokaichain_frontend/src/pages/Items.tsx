import YokaiTitle from "../components/YokaiTitle";
import React from "react";
import proba from "../media/proba.json";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ItemModal from "../components/ItemModal";

export interface probaItems{
    name: string
    items: probaItem[]
}

export interface probaItem{
    name: string,
    proba: string,
    svg: string
}

const Items = () => {


    let categories = proba as probaItems[];

    const collapse = (event: React.MouseEvent<HTMLDivElement>) => {
        const categ = event.target as HTMLDivElement;
        let row: HTMLDivElement;

        if(!categ.classList) return;

        if(categ.classList.contains("item-categories"))
            row = categ.parentElement!.nextElementSibling!.getElementsByClassName("items-row")[0] as HTMLDivElement;
        else
            row = categ.getElementsByClassName("items-row")[0] as HTMLDivElement;

        if(!row || !row.classList) return;

        if(row.classList.contains("show")) {
            row.classList.remove("show");
            row.parentElement!.style.height = "0px";
        }
        else{
            row.classList.add("show");
            row.parentElement!.style.height = row.clientHeight + "px";
        }
    }


  return (
    <div className={"items"}>
        
        <style>{"\
                .bg-illustration.bottom{\
                  display:none;\
                }\
              "}</style>
      <YokaiTitle>Items</YokaiTitle>
        <p>Hover the items to show its probability to appear.</p>
        {categories ?(
        categories.map((x,i) => (
            <>
            <div key={i} onClick={(e) => collapse(e)}>
            <div className={"item-categories"}>{x.name + ' (' + x.items.length + ')'}</div>
            </div>
                <div className={"items-grow"}>
            <div className={"items-row"}>

                {x.items.map((y,t) => (
                    <div key={t} className={"item"}>
                        <div className={"item-container"}>
                            {i != 0?(
                            <div className={"item-data"}>
                                <div>{y.proba}%</div>
                            </div>
                                ):(<div className={"item-data"}>
                                <div>{y.proba}% approx.</div>
                            </div>)}
          <Zoom overlayBgColorEnd="RGBA(18,19,22,0.79)" openText="Very Rare !">
              {x.name === "Background" || y.name === "Kintaro" ||y.name === "Kin Moon" ?(
                  <img src={"data:image/svg+xml;base64,"+btoa(y.svg)} alt={y.name}/>
              ):(
                   <div dangerouslySetInnerHTML={{__html:   y.svg}}></div>
              )}
          </Zoom>
                           
                        </div>
                        <div className={"item-name"}>{y.name}</div>
                    </div>
                ))}
            </div>
                </div>
            </>
        ))):(
            <></>
            )}
    </div>

  );
};

export default Items;
