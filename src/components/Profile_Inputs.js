import React from 'react'

export default function ProfileInputs(props) {
  return (
    <div className="profile-input">
        <input type={props.type} name={props.name} value={props.value} />
        <label>{props.value}</label>
        <span>{props.date}</span>
    </div>
  )
}
