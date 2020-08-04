import React, {Component} from 'react';

class CopyrightMenu extends Component {
    state = {
        links: [
            {
                path: 'https://www.res-and-co.fr/mentions-legales/',
                text: 'Mentions légales'
            },
            {
                path: 'https://www.res-and-co.fr/politique-de-confidentialite/',
                text: 'Politique de confidentialité'
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="list-items">
                    {this.state.links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.path}>{link.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default CopyrightMenu;