import React from 'react'
import './styles/primarybutton.scss'

function PrimaryButton({onClick, text, color}) {
    return (
        <button onClick = {onClick} className={"PrimaryButton  " + color}>{text}</button>
    )
}

export default PrimaryButton
