import React, {Component} from 'react';
import { GiAirplane, GiEcology } from 'react-icons/gi'
import { FiGift, FiPercent } from 'react-icons/fi'

class IconBoxTwo extends Component {
    state = {
        items: [
            {
                id: 1,
                icon: <FiGift />,
                title: 'TE FAIRE PLAISIR',
                desc: 'En découvrant de nouvelles saveurs et en se laissant surprendre par un menu original préparé par tes restaurateurs'
            },
            {
                id: 2,
                icon: <GiAirplane />,
                title: 'AIDER TES COMMERCANTS',
                desc: 'En leur apportant ton soutien pour surmonter la crise sanitaire et leur permettre de ne rien jeter'
            },
            {
                id: 3,
                icon: <FiPercent />,
                title: 'FAIRE DES ECONOMIES',
                desc: 'En profitant de tarifs réduits. Jusqu’à 64% de réduction par rapport aux menus habituels'
            },
            {
                id: 4,
                icon: <GiEcology />,
                title: 'PRÉSERVER LA PLANÈTE',
                desc: 'En nous aidant à réduire le gaspillage alimentaire mondial'
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
                                    <div className="info-icon text-center">
                                        {item.icon}
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
