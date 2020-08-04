import React, {Component} from 'react';
import { FaSearchPlus, FaRegMap, FaSort } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'

class IconBoxTwo extends Component {
    state = {
        items: [
            {
                id: 1,
                icon: <FaSearchPlus />,
                title: 'Découverte',
                desc: 'Découvrez de nouveaux restaurants et de nouvelles saveurs'
            },
            {
                id: 2,
                icon: <FaRegMap />,
                title: 'Eco-responsable',
                desc: 'Optez pour une restauration qui limite le gaspillage alimentaire'
            },
            {
                id: 3,
                icon: <FaSort />,
                title: 'Surprise',
                desc: 'Laissez-vous surprendre par un menu surprise sélectionné par le Chef'
            },
            {
                id: 4,
                icon: <FiCheckCircle />,
                title: 'Promotion',
                desc: 'Bénéficiez d’un tarif réduit sur le prix habituel du menu'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row padding-top-100px">
                    {this.state.items.map(item => {
                        return (
                            <div className="col-lg-3 column-td-6" key={item.id}>
                                <div className="icon-box">
                                    <div className="info-icon">
                                        <span className="d-inline-block">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div className="info-content">
                                        <h4 className="info__title">
                                            {item.title}
                                        </h4>
                                        <p className="info__desc">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default IconBoxTwo;