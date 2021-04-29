import React from 'react'

export default function Logo({ url, className }) {
    return (
        <>
            <a href="https://www.res-and-co.fr/" className={className}>
                <img src={url} alt="logo" />
            </a>
        </>
    )
}
