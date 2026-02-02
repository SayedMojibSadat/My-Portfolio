import React from 'react'

function ImageBar({className}) {
    return (
        <div className={`home__img--wrapper ${className && className}`}>
            <img src="images/profile3.png" alt="" className="home__img" />
        </div>
    )
}

export default ImageBar