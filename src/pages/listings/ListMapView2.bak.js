import React, {Component} from 'react';
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import Newsletter from "../../components/other/cta/Newsletter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PlaceGrid from "../../components/places/PlaceGrid";
import MapViewCluster from "../../components/contact/MapViewCluster";
import restaurants from '../../restaurants'


class ListMapView2 extends Component {
    state = {
        items: restaurants
    }
    render() {
        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />

                {/* Place List */}
                <section className="card-area margin-top-100px padding-bottom-100px">
                    <div className="container">
                        <div className="row align-items-start">

                            <div className="col-lg-8 ">
                                <div className="home-map">
                                    <div className="map-container map-height w-100">
                                        <MapViewCluster />
                                    </div>
                                </div>
                                <div className="row twocol align-items-start justify-content-start margin-top-30px">
                                    <PlaceGrid />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <ListingListSidebar />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared text-center">
                                    <Button text="load more" url="#" className="border-0">
                                        <span className="d-inline-block">
                                            <FiRefreshCw />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <Newsletter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        );
    }
}

export default ListMapView2;