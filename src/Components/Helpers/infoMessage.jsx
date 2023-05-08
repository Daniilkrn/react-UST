import React from "react"
import { RiErrorWarningLine } from "react-icons/ri"

const InfoMessage = ({text}) => {
    return (
        <div className="infoMessage">
            <RiErrorWarningLine></RiErrorWarningLine>
            <li>{text}</li>
        </div>
    )
}

export default InfoMessage