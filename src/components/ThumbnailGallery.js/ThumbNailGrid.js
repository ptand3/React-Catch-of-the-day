//this component is going to be a functional component since its not going 
//to have nay state or ony logicc inside ..
import React from "react";
import ThumbNails from "./ThumbNails";

const ThumbNailGrid = ({fishes,handleClick}) => {
  return (
    <div className="thumbnail-grid">
      {
        Object.keys(fishes).map(key =>
        <ThumbNails 
         handleClick ={handleClick}
         details ={fishes[key]}
         key={key}
         index={key}/>
        )}
    </div>
  )
}
export default ThumbNailGrid;