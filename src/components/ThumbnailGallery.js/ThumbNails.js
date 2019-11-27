//this component is going to be a functional component since its not going 
//to have nay state or ony logicc inside ..
import React from "react";

const ThumbNails =({details, handleClick, index}) =>{
  const{ name , image} = details;
  return (
      <div className ="thumbnails">
        <img 
        src ={image} 
        alt={name} 
        onClick ={handleClick} 
        data-index ={index} />
      </div>
  )
}
export default ThumbNails;