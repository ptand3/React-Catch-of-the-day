import React, { Component } from "react";
import ActiveThumbNailWindow from "./ActiveThumbnailwindow";
// eslint-disable-next-line 
import fishes from "../../sample-fishes";
import ThumbNailGrid from "./ThumbNailGrid";
import "./gallery.css";

export default class ThumbnailGallery extends Component {

    state = {
        fishes: {},
        activeIndex: "fish1"
    }

    componentDidMount() {
        this.setState({
            fishes: fishes
        })
    }

    handleClick = (e) => {
        const newActiveIndex = e.target.getAttribute("data-index");
        this.setState({
            activeIndex: newActiveIndex
        })

    }
    showThumbNails = () => {
        const { fishes, activeIndex } = this.state;
        const length = Object.keys(fishes).length;
        if (length) {
            return (
                <>
                    <ActiveThumbNailWindow
                        activeThumbnail={fishes[activeIndex]}
                    />
                    <ThumbNailGrid
                        fishes={fishes}
                        handleClick={this.handleClick}
                    />
                </>
            )
        }
        return null
    }
    showTextContent = () => {
        const { fishes, activeIndex } = this.state;
        const length = Object.keys(fishes).length;
        if (length) {
            return (
                <div>
                    <h1 className= "inventory">{fishes[activeIndex].name}</h1>
                    <p>{fishes[activeIndex].desc}</p>
                    <p>${fishes[activeIndex].price}</p>
                </div>
            )
        }
        return null

    }


    render() {
        // const { fishes } = this.state;
        return (
            <div className="thumbnail-gallery">
                <div className="left-side">
                    {this.showThumbNails()}
                </div>
                <div className="right-side">
                    {this.showTextContent()}
                </div>
            </div>
        )
    }
}
