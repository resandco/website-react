import React, {Component} from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaDribbble } from 'react-icons/fa'

class SocialProfile extends Component {
    state = {
        socials: [
            {
                icon: <FaFacebookF />,
                url: 'https://www.facebook.com/resandco.antigaspi/'
            },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/resandco.antigaspi/'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/company/res-and-co/'
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="social-profile padding-top-30px padding-bottom-30px">
                    {this.state.socials.map((item, i) => {
                        return (
                            <li key={i}><a href={item.url}><i className="fa">{item.icon}</i></a></li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default SocialProfile;