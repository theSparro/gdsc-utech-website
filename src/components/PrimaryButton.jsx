import React from 'react'
import './styles/primarybutton.scss'

function PrimaryButton({ onClick, text, color, ...rest }) {
	return (
		<button
			onClick={onClick}
			className={'PrimaryButton  ' + color}
			{...rest}>
			{text}
		</button>
	)
}

export default PrimaryButton
