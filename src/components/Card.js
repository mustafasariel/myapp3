import React from "react";
import PropTypes from 'prop-types';

// const Card = (props) => {

//     return (

//             <div className="card w-100">
//             <img src={props.imageUrl} className="card-img-top"  alt="..."></img>
//                 <div className="card-body">
//                     <h5 className="card-title">{props.cardTitle}</h5>
//                     <p className="card-text">{props.cardContent}</p>
//                     <p className="card-text"><small className="text-muted">{props.cardFooter}</small></p>

//                 </div>
//             </div>

//     );
// };


class Card extends React.Component {
    render() {
        return (
            <div className="card w-100">
                <img src={this.props.imageUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardContent}</p>
                    <p className="card-text"><small className="text-muted">{this.props.cardFooter}</small></p>

                </div>
            </div>
        )
    };
}

// Card.defaultProps = {
//     cardTitle: "default title",
//     cardFooter: "default footer",
//     cardContent: "default content"
// }
// Card.PropTypes = {
//     imageUrl: PropTypes.string.isRequired
// }

Card.propTypes={
    cardTitle:PropTypes.string.isRequired,
    cardFooter:PropTypes.string

}

export default Card;