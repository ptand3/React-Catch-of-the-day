import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm"
// import fishes from "../sample-fishes";
import EditFormFish from "./EditFormFish";

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadsamplefishes: PropTypes.func,
    };
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!!</h2>
                {Object.keys(this.props.fishes).map(key => (
                    <EditFormFish
                        key={key}
                        index={key}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                        fish={this.props.fishes[key]} />
                ))}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadsamplefishes}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;