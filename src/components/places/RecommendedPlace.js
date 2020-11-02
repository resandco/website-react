import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function RecommendedPlace({
    place,
    handleEnterPlace = () => {},
    handleLeavePlace = () => {},
    isSelected,
    isHovered
}) {
    const handleMouseEnter = () => {
        handleEnterPlace(place.id)
    }
    const handleMouseLeave = () => {
        handleLeavePlace(place.id)
    }

    return (
        <div className="col-lg-4 column-td-6"
            id={`place-${place.id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`card-item ${isHovered || isSelected ? 'card-item__hover': ''}`}>
                <Link to={`/restaurant/${place.id}`} className="card-image-wrap">
                    <div className="card-image">
                    <img src={`${place.image}?tr=h-540`} className="card__img" alt="Place" />
                        <span className={place.titleIcon ? 'badge': 'badge badge-closed' }>{place.badge}</span>
                    </div>
                </Link>
                <div className="card-content-wrap">
                    <div className="card-content">
                        <Link to={`/restaurant/${place.id}`}>
                            <h4 className="card-title">
                                { place.title }
                                { place.verifie ? ( <i> {<IoIosCheckmarkCircle />}</i> ) : "" }
                            </h4>
                            <p className="card-sub">
                                {place.stitle}, {place.scity}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}