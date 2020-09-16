import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FooterCategoryWidget extends Component {
    state = {
        title: 'Le blog',
        links: [
            {
                path: 'https://www.res-and-co.fr/category/gaspillage-alimentaire/',
                text: 'Le gaspillage alimentaire'
            },
            {
                path: 'https://www.res-and-co.fr/category/recettes-anti-gaspi/',
                text: 'Recettes anti-gaspi'
            },
            {
                path: 'https://www.res-and-co.fr/category/parole-de-restaurateurs/',
                text: 'Paroles de restaurateurs'
            },
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
        );
    }
}

export default FooterCategoryWidget;