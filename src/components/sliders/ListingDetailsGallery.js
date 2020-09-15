import React from 'react';
import OwlCarousel from "react-owl-carousel";

const previcon = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"></path></svg>';
const nextIcon = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20c-.802 0-1.555-.312-2.122-.879-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l2.878-2.878-2.878-2.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l7.121 7.121-7.122 7.121c-.566.567-1.319.879-2.121.879zm0-14c-.268 0-.518.104-.707.292-.189.19-.293.441-.293.708s.104.518.293.707l4.292 4.293-4.292 4.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l5.708-5.708-5.708-5.707c-.189-.189-.439-.293-.707-.293z"></path></svg>';

function ListingDetailsGallery({ galery: images, restaurantName }) {
    return (
        <>
            <OwlCarousel
                className="gallery-carousel"
                loop
                margin={10}
                autoplay={true}
                nav={true}
                navText={[previcon, nextIcon]}
                dots={true}
                smartSpeed={1000}
                items={1}
                dotsContainer={'#gallery-carousel'}
            >
                {images.map((image, i) => {
                    return (
                        <div key={i} className="gallery-item">
                            <img src={`${image}?tr=w-750`} alt={`Photo d'un plat du restaurant ${restaurantName}`} />
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