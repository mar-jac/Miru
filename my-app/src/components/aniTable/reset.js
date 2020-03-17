import React from "react"

const ResetButton = ({ onClick }) => {
    return (
        <i
            className="reset-button"
            onClick={onClick}
            title="This will reset the database."
        >
            <span>Reset</span>
        </i>
    )
}

export default ResetButton