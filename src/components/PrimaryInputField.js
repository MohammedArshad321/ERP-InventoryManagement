import React from 'react'
import './PrimaryInputField.css'
export default function InputField(props) {
    return (
        <>
            <input className="primary-input-field" type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange}/>           
        </>
    )
}
