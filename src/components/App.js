import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";
import fishes from "../sample-fishes";
import Fish from "../components/Fishes";
import ThumbnailGallery from "../components/ThumbnailGallery.js";
// import base from "../base";

class App extends React.Component {

    state = {   //set the new empty state
        fishes: {},
        order: {}
    }
    static propTypes = {
        match: PropTypes.object
    };
    componentDidMount() {
        const { params } = this.props.match;
        //reinstate our local storage
        const localStorageRef = localStorage.getItem(params.storeID);
        if (localStorageRef) {  //set the LS to state order
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        // this.ref = base.syncState(`${params.storeID}/fishes`, {
        //     context: this,
        //     state: "fishes"
        // });
    }
    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order));
    }
    componentWillUnmount() {
        console.log("UNmounted");
    }

    //update the new state from existing setStateApI

    addFish = fish => {
        // take a copy of the existing state

        const fishes = { ...this.state.fishes };
        //add the new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //set the the new fish object to the state
        this.setState({
            fishes
        });
    }
    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({ fishes });
    };

    deleteFish = key => {
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        delete fishes[key];
        // 3. Set that to state
        this.setState({ fishes });
        console.log("deleted")
    }



    addToOrder = (key) => {
        //Take a copy of the existing state
        const order = { ...this.state.order };
        //Create a new order or add amount to the order
        order[key] = order[key] + 1 || 1;
        //set the the new fish object to the state
        this.setState({
            order
        });
    }
    removeFromOrder = (key) => {
        console.log("removed order")
        //Take a copy of the existing state
        const order = { ...this.state.order };
        //Create a new order or add amount to the order
        delete order[key];
        //set the the new fish object to the state
        this.setState({
            order
        });
    }


    loadsamplefishes = () => {

        this.setState({
            fishes: fishes
        })
    }

    render() {
        return (
            <>  
                <ThumbnailGallery />
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagName="Fresh Sea Food" />
                        <ul className="fishes">
                            {Object.keys(this.state.fishes).map(key =>
                                <Fish
                                    index={key}
                                    key={key}
                                    details={this.state.fishes[key]}
                                    addToOrder={this.addToOrder} />)}
                        </ul>
                    </div>
                    <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                    <Inventory
                        addFish={this.addFish}
                        deleteFish={this.deleteFish}
                        updateFish={this.updateFish}
                        loadsamplefishes={this.loadsamplefishes}
                        fishes={this.state.fishes}
                    />

                </div>
            </>
        )

    }
}

export default App;