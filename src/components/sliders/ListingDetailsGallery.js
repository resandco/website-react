import React from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ListingDetailsGallery({ galery: images, restaurantName }) {
    return (
        <>
            <OwlCarousel
                className="gallery-carousel"
                loop
                margin={10}
                autoplay={true}
                nav={true}
                navText={["◂", "▸"]}
                dots={true}
                smartSpeed={1000}
                items={1}
                dotsContainer={'#gallery-carousel'}
            >
                {images.map((image, i) => {
                    return (
                        <div key={i} className="gallery-item">
                            <img src={`${image}?tr=ar-4-3,w-770,cm-pad_resize`} alt={`Un plat du restaurant ${restaurantName}`} />
                        </div>
                    )
                })}
            </OwlCarousel>
            <div className="gallery-carousel">
                <div className="owl-dots" id="gallery-carousel">
                    {images.map((image, i) => {
                        return (
                            <button key={i} className="owl-dot">
                                <img src={`${image}?tr=h-100`} alt=""/>
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ListingDetailsGallery;