import React, {Component} from 'react';
import restaurants from '../../restaurants'

const threeRestaurants = Object.values(restaurants).slice(0, 3);

class RecommendedPlace extends Component {
    state = {
        items: threeRestaurants
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.items.map((item, index) => {
                        return (
                            <div className="col-lg-4 column-td-6" key={index}>
                                <div className="card-item">
                                    <a href={item.titleUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.image} className="card__img" alt="Place" />
                                            <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                        </div>
                                    </a>
                                    <div className="card-content-wrap">
                                        <div className="card-content">
                                            <a href={item.titleUrl}>
                                                <h5 className="card-meta">
                                                    <span>{item.cardTypeIcon}</span> {item.cardType}
                                                </h5>
                                                <h4 className="card-title">{item.title} <i>{item.titleIcon}</i>
                                                </h4>
                                                <p className="card-sub">
                                                    {item.stitle}, {item.scity}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default RecommendedPlace;