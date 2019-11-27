import React from "react";
import PropTypes from "prop-types";

//Stateless functional Compoenent

const Header = (props) => (
    <header className="top">
        <h1>Catch
        <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            day</h1>
        <h3 className="tagline">
            <span>{props.tagName}</span>
        </h3>
    </header>
)
Header.propTypes ={
    tagName: PropTypes.string.isRequired
}




//Statefull Component
// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>Catch
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                     day</h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagName}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

export default Header;