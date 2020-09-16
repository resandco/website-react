import React from 'react';

export default function FooterCategoryWidget() {
    return (
        <div className="col-lg-3 column-td-6">
            <div className="footer-item">
                <h4 className="footer__title">
                    Le blog
                </h4>
                <ul className="list-items">
                    <li>
                        <a href="https://www.res-and-co.fr/category/gaspillage-alimentaire/">
                        Le gaspillage alimentaire
                        </a>
                    </li>
                    <li>
                        <a href="https://www.res-and-co.fr/category/recettes-anti-gaspi/">
                            Recettes anti-gaspi
                        </a>
                    </li>
                    <li>
                        <a href="https://www.res-and-co.fr/category/parole-de-restaurateurs/">
                            Paroles de restaurateurs
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}