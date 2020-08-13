import React, {Component} from 'react';
import restaurants from '../../restaurants'

const threeRestaurants = Object.values(restaurants).slice(0, 3);

export default function RecommendedPlace({ place, handleEnterPlace, handleLeavePlace, isSelected, isHovered }) {
    const handleMouseEnter = () => {
        handleEnterPlace(place.id)
    }
    const handleMouseLeave = () => {
        handleLeavePlace(place.id)
    }

    return (
        <>
            <div className="col-lg-4 column-td-6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={`card-item ${isHovered || isSelected ? 'card-item__hover': ''}`}>
                    <a href={place.titleUrl} className="card-image-wrap">
                        <div className="card-image">
                            <img src={place.image} className="card__img" alt="Place" />
                            <span className={place.titleIcon ? 'badge': 'badge badge-closed' }>{place.badge}</span>
                        </div>
                    </a>
                    <div className="card-content-wrap">
                        <div className="card-content">
                            <a href={place.titleUrl}>
                                <h4 className="card-title">{place.title} <i>{place.titleIcon}</i></h4>
                                <p className="card-sub">
                                    {place.stitle}, {place.scity}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}