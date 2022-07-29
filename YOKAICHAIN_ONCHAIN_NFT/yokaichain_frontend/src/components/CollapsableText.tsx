import {PropsWithChildren} from "react";

export interface CollapsableProps {
    title: string
}



const CollapsableText = (props: PropsWithChildren<CollapsableProps>)=>{

    const collapse = (event: React.MouseEvent<HTMLDivElement>) => {
        const categ = event.target as HTMLDivElement;
        let row: HTMLDivElement;

        if(categ.classList.contains("collapsable-toggler"))
            row = categ.parentElement!.nextElementSibling!.getElementsByClassName("collapsable-row")[0] as HTMLDivElement;
        else
            row = categ.getElementsByClassName("collapsable-row")[0] as HTMLDivElement;



        if(row.classList.contains("show")) {
            row.classList.remove("show");
            row.parentElement!.style.height = "0px";
        }
        else{
            row.classList.add("show");
            row.parentElement!.style.height = row.clientHeight + "px";
        }
    }

    return(
        <>
        <div onClick={(e) => collapse(e)}>
        <div className={"collapsable-toggler"}>{props.title}</div>
        </div>

            <div className={"collapsable-transition"}>
                <div className={"collapsable-row"}>
                    {props.children}
                </div>
            </div>

        </>
    )

}

export default CollapsableText;