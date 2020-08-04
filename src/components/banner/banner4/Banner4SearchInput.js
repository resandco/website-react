import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class BannerOneSearchInput extends Component {
    state = {
        selectedCatOp: null,
    }

    handleChangeCat = () => {
        const { selectedCatOp } = this.state;
        this.setState(
            { selectedCatOp }
        );
    }
    render() {
        return (
            <>
                <div className="main-search-input">
                    <div className="main-search-input-btn">
                        <Link to="/reservation-restaurant" className="button theme-btn" type="submit">Réserver un restaurant</Link>
                    </div>
                </div>
            </>
        )
    }
}
