import React from 'react'
import {ProductDetails} from '../pages/ProductDetails';
export default function ProductTable(props) {
  return (
    <table className="table-content">
    <thead>
      <tr>      
        <th>{props.productname}</th>
        <th>{props.productcode}</th>
        <th>{props.category}</th>
        <th>{props.price}</th>
        <th>{props.quantity}</th>
        <th>{props.stockstatus}</th>
        <th>{props.productimage}</th>
      </tr>
    </thead>
    <tbody>
      {ProductDetails.map((ProductDetails, index) =>
        <tr key={index}>   
          <td>{ProductDetails.productname}</td>
          <td>{ProductDetails.productcode}</td>
          <td>{ProductDetails.category}</td>
          <td>{ProductDetails.price}</td>
          <td>{ProductDetails.quantity}</td>
          <td>{ProductDetails.stockstatus}</td>
          <td>{ProductDetails.productimage}</td>
        </tr>
      )}          
    </tbody>
  </table>
  )
}
