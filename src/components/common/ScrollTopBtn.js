import React, { Component } from 'react'
import { BsChevronUp } from 'react-icons/bs'

class ScrollTopBtn extends Component {
    componentDidMount() {
        const { jQuery: $ } = window

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.back-to-top').show()
            } else {
                $('.back-to-top').hide()
            }
        })
    }

    render() {
        const handleClick = function () {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        }

        return (
            <>
                <div
                    className="back-to-top show-back-to-top"
                    onClick={handleClick}
                >
                    <BsChevronUp />
                </div>
            </>
        )
    }
}

export default ScrollTopBtn
