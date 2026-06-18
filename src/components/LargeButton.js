import React from 'react'
import './LargeButton.css'
export default function PrimaryButton(props) {
  return (
    <div className="large-button">
        <button>{props.button_name}</button>
    </div>
  )
}
