//this component is going to be a functional component since its not going 
//to have nay state or ony logicc inside ..
import React from "react";

// const ActiveThumbNailWindow = ({activeThumbnail}) => {
//    console.log(activeThumbnail);

//   return (
//     <div className="active-window" >
//      {/* <img src ={activeThumbnail.image}  alt ={activeThumbnail.name}/> */}
//      </div>
//   )
// }

export default class ActiveThumbNailWindow extends React.Component {
  render() {

    return (
      <div className="active-window">
      <img src = {this.props.activeThumbnail.image} alt ={this.props.activeThumbnail.name} />
      </div>
    )
  }
};