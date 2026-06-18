import React from 'react';
import './EmployeeTable.css';
import {EmployeeDetails} from '../pages/EmployeeDetails'
export default function PrimaryTable(props) {
  return (
    <table className="table-content">
    <thead>
      <tr>
        <th>{props.checkbox}</th>
        <th>{props.name}</th>
        <th>{props.title}</th>
        <th>{props.email}</th>
        <th>{props.address}</th>
        <th>{props.dateofbirth}</th>
        <th>{props.contactcreated}</th>
        <th>{props.action}</th>
      </tr>
    </thead>
    <tbody>
      {EmployeeDetails.map((EmployeeDetails, index) =>
        <tr key={index}>
          <td>{EmployeeDetails.checkbox}</td>
          <td><img src={EmployeeDetails.profile} alt="profile"/>{EmployeeDetails.fullname}</td>
          <td>{EmployeeDetails.title}</td>
          <td>{EmployeeDetails.email}</td>
          <td>{EmployeeDetails.address}</td>
          <td>{EmployeeDetails.dateofbirth}</td>
          <td>{EmployeeDetails.contactcreated}</td>
          <td>{EmployeeDetails.edit}{EmployeeDetails.delete}</td>
        </tr>
      )}          
    </tbody>
  </table>
  )
}
