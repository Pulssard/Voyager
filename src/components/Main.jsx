import React from "react";
import SaleCarousel from "./SaleCarousel";


function Main(props) {
    return(
        <div className="mainFlex"> 
        <SaleCarousel addProducts={props.addProducts}/>
        </div>
    );
}

export default Main;