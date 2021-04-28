import React from 'react'

export default function FooterCategoryWidget() {
    return (
        <div className="col-lg-3 column-td-6">
            <div className="footer-item">
                <h4 className="footer__title">Nos offres</h4>
                <ul className="list-items">
                    <li>
                        <a href="https://resandco.typeform.com/to/xP5GlH">
                            Devenir restaurant partenaire
                        </a>
                    </li>
                    <li>
                        <a href="https://pro.res-and-co.fr/restauration-entreprise-engagee">
                            Restauration d'entreprise
                        </a>
                    </li>
                    <li>
                        <a href="https://antigaspi.res-and-co.fr/ateliers-et-formations-anti-gaspi">
                            Ateliers & Formations
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
