import OniiTitle from "../components/OniiTitle";
import React from "react";
import proba from "../media/proba.json";

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

        if(categ.classList.contains("item-categories"))
            row = categ.parentElement!.nextElementSibling!.getElementsByClassName("items-row")[0] as HTMLDivElement;
        else
            row = categ.getElementsByClassName("items-row")[0] as HTMLDivElement;



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
      <OniiTitle>Items</OniiTitle>
        <p>Hover the item to show its probability to appear.</p>
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
                            {i !== 0?(
                            <div className={"item-data"}>
                                <div>{y.proba}%</div>
                            </div>
                                ):(<></>)}
                            <div dangerouslySetInnerHTML={{__html:   y.svg}}></div>
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
