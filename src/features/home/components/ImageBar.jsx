import React from 'react'

function ImageBar({ className }) {
    return (
        <div className={`home__img--wrapper ${className || ''}`}>
            <img src="images/profile3.png" alt="Profile" className="home__img" />
        </div>
    )
}

export default ImageBar