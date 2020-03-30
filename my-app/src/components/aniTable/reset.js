import React from "react"

const ResetButton = ({ onClick }) => {
    return (
        <i
            className="fa fa-redo-alt reset-button"
            onClick={onClick}
            title="This will reset the database."
        >
            <span style={{ marginLeft: 5 }}>Reset</span>
        </i>
    )
}

export default ResetButton