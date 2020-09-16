import React, {Component} from 'react';
import { FiHeadphones } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

class FooterContactWidget extends Component {
    state = {
        title: 'Contactez nous',
        lists: [
            {
                icon: <FiHeadphones />,
                text: '01.86.70.05.20',
                href: 'tel:0033186700520'
            },
            {
                icon: <FaRegEnvelope />,
                text: 'hello@res-and-co.fr',
                href: 'mailto:hello@res-and-co.fr'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <h4 className="footer__title">
                            {this.state.title}
                        </h4>
                        <ul className="info-list contact-links">
                            {this.state.lists.map((list, index) => {
                                return (
                                    <li key={index}>
                                        <a href={list.href}>
                                            <span className="la">
                                                {list.icon}
                                            </span> {list.text}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterContactWidget;