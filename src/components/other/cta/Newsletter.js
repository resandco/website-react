import React from 'react'
import SectionsHeading from '../../common/SectionsHeading'
import { FaRegEnvelope } from 'react-icons/fa'

export default function Newsletter() {
    const email = React.createRef()

    return (
        <>
            <section className="cta-area cta-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-box d-flex align-items-center">
                                <div className="col-lg-8">
                                    <SectionsHeading
                                        title="La lutte contre le gaspillage alimentaire ne s'arrête jamais"
                                        titleClass="text-white"
                                        desc="Reçois en avant-première tous les bons plans, astuces et évènements anti-gaspi RES&CO directement dans ta boîte mail !"
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-form-action">
                                        <form
                                            action="https://res-and-co.us20.list-manage.com/subscribe/post?u=bebf0a6eb76418045227d3b93&id=b7363306df"
                                            method="post"
                                            target="_blank"
                                            noValidate
                                        >
                                            <div className="form-group mb-0">
                                                <span className="form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    name="EMAIL"
                                                    placeholder="ton@email.ici"
                                                    ref={email}
                                                />
                                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '-5000px',
                                                    }}
                                                    aria-hidden="true"
                                                >
                                                    <input
                                                        type="text"
                                                        name="b_bebf0a6eb76418045227d3b93_b7363306df"
                                                        tabIndex="-1"
                                                        value=""
                                                        readOnly={true}
                                                    />
                                                </div>
                                                <input
                                                    type="submit"
                                                    className="theme-btn"
                                                    name="subscribe"
                                                    value="Je m'abonne"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
