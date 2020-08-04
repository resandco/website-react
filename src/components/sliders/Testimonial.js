import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import { FaQuoteLeft } from 'react-icons/fa'

class Testimonial extends Component {
    testimonialState = {
        prevIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 010-1.506l5.48-4.796A1 1 0 0111 3.204v9.592a1 1 0 01-1.659.753z" clip-rule="evenodd"></path></svg>',
        nextIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z" clip-rule="evenodd"></path></svg>',
        sliders: [
            {
                id: '1',
                title: 'Pascal P.',
                designation: 'Gourmet Yuman',
                content: 'Je viens de tester le YUMAN avec Res&Co... c’est mieux qu’une surprise c’est un cadeau ! Excellentissime curry de rascasse aux carottes croquantes et courgettes fondantes : yumy ! Et l’accueil n’est pas en reste. Merci Malo, nous reviendrons.'
            },
            {
                id: '2',
                title: 'Emeline M.',
                designation: 'Gourmet Yuman',
                content: 'J\'ai testé Yuman grâce à Res&Co, un resto sympa où l\'on est bien reçu et on repart en ayant très bien mangé. La formule surprise est une super idée ! On est agréablement surpris et on fait sa BA !'
            },
            {
                id: '3',
                title: 'Charlotte R.',
                designation: 'Gourmet Nos Grands Mères Ont du Talent',
                content: 'Après avoir testé un goûter et un resto, le bilan est super positif ! Personnel charmant, de belles surprises et surtout de très bons plats ! Je recommande !'
            }
        ]
    }
    render() {
        return (
            <>
                <OwlCarousel
                    className="testimonial-carousel"
                    loop
                    margin={80}
                    autoplay={true}
                    nav={true}
                    navText={[this.testimonialState.prevIcon, this.testimonialState.nextIcon]}
                    dots={true}
                    items={1}
                    smartSpeed={1000}
                >
                    {this.testimonialState.sliders.map(slider => {
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
                                    <h4 className="tesi__title">{slider.title}</h4>
                                    <span className="testi__meta">{slider.designation}</span>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </>
        );
    }
}

export default Testimonial;