import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner4 from "../../components/banner/banner4/Banner4";
import SectionsHeading from "../../components/common/SectionsHeading";
import IconBoxTwo from "../../components/other/iconboxes/IconBoxTwo";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import InfoBox2 from "../../components/other/infoboxes/InfoBox2";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import Button from "../../components/common/Button";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Home4 extends Component {
    state = {
        tmimage: [
            {
                tmimg: require('../../assets/images/testi-img1.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img2.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img3.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img4.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img5.jpg')
            },
            {
                tmimg: require('../../assets/images/testi-img6.jpg')
            }
        ]
    }
    render() {
        return (
            <main className="home-4">
                {/* Header */}
                <GeneralHeader />

                {/* Banner */}
                <Banner4 videoUrl={this.state.videoSrc} />

                {/* Recommended Place */}
                <section className="card-area padding-top-100px padding-bottom-90px text-left">
                    <div className="container">
                        <div className="row section-title-width text-left">
                            <SectionsHeading title="Les restaurants Res&Co" />
                        </div>
                        <RecommendedPlace />
                    </div>
                </section>

                {/* How it works */}
                <section className="hiw-area text-left padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-left">
                            <SectionsHeading
                                title="Res&amp;Co c'est quoi ?"
                                titleClass=" before-none pt-0"
                                desc="
                                    La seule plateforme de réservation de tables avec un menu surprise à prix réduit pour lutter contre le gaspillage alimentaire des restaurants de votre quartier.
                                " />
                        </div>

                        <IconBoxTwo />
                    </div>
                </section>

                {/* Testimonial */}
                <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.state.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Témoignages de gourmets" titleClass=" before-none pt-0" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto mt-4">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider />

                {/* Blog
                <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Latest Tips & Articles" titleClass=" before-none pt-0" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>

                        <LatestBlog />

                    </div>
                </section>
                */}

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Home4;