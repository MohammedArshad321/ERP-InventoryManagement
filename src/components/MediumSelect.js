import React from 'react'
import './MediumSelect.css'
export default function MediumSelect(props) {
  return (
    <div className="medium-select">
        <select name="medium-select">
            <option value={props.value}>{props.label}</option>    
        </select>
    </div>
  )
}
