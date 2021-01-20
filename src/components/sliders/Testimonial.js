import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { FaQuoteLeft } from 'react-icons/fa'

class Testimonial extends Component {
    testimonialState = {
        sliders: [
            {
                id: '1',
                title: 'Pascal P.',
                designation: 'Gourmet Yuman',
                content:
                    'Je viens de tester le YUMAN avec Res&Co... c’est mieux qu’une surprise c’est un cadeau ! Excellentissime curry de rascasse aux carottes croquantes et courgettes fondantes : yumy ! Et l’accueil n’est pas en reste. Merci Malo, nous reviendrons.',
            },
            {
                id: '2',
                title: 'Emeline M.',
                designation: 'Gourmet Yuman',
                content:
                    "J'ai testé Yuman grâce à Res&Co, un resto sympa où l'on est bien reçu et on repart en ayant très bien mangé. La formule surprise est une super idée ! On est agréablement surpris et on fait sa BA !",
            },
            {
                id: '3',
                title: 'Charlotte R.',
                designation: 'Gourmet Nos Grands Mères Ont du Talent',
                content:
                    'Après avoir testé un goûter et un resto, le bilan est super positif ! Personnel charmant, de belles surprises et surtout de très bons plats ! Je recommande !',
            },
        ],
    }
    render() {
        return (
            <>
                <OwlCarousel
                    className="testimonial-carousel"
                    loop
                    margin={80}
                    nav={true}
                    navText={['◂', '▸']}
                    dots={true}
                    items={1}
                    smartSpeed={1000}
                >
                    {this.testimonialState.sliders.map((slider) => {
                        return (
                            <div className="testimonial-item" key={slider.id}>
                                <div className="testi-comment">
                                    <span className="testi_quote">
                                        <FaQuoteLeft />
                                    </span>
                                    <p className="testi__desc">
                                        {slider.content}
                                    </p>
                                </div>
                                <div className="testi-content">
                                    <h4 className="tesi__title">
                                        {slider.title}
                                    </h4>
                                    <span className="testi__meta">
                                        {slider.designation}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </>
        )
    }
}

export default Testimonial
