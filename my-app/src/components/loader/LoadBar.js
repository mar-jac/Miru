import React from "react"
import loadIcon from "../../res/gif/oval.svg"

const LoadBar = () => {
    return (
        <div className="load-bar">
            <img className="load-icon" src={loadIcon} alt="loading..." />
        </div>
    )
};

export default LoadBar