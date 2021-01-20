import React, { Component } from 'react'

class FooterQuickLinkWidget extends Component {
    state = {
        title: 'Liens',
        links: [
            {
                path: 'https://www.res-and-co.fr/faq/',
                text: 'À propos',
            },
            {
                path: 'https://www.res-and-co.fr/faq/',
                text: 'FAQ',
            },
            {
                path: 'https://resandco.typeform.com/to/xP5GlH',
                text: 'Devenir partenaire',
            },
            {
                path:
                    'https://www.res-and-co.fr/conditions-generales-dutilisation/',
                text: "Conditions d'utilisation",
            },
        ],
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <h4 className="footer__title">{this.state.title}</h4>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.path}>{link.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default FooterQuickLinkWidget
