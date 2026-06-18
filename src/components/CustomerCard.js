import React from 'react'

export default function CustomerCard(props) {
  return (
    <div className="customer-card">
    <div className="customer-details-area">
      <div className="customer-img">
        <img src={props.profile} alt="" />
      </div>
      <div className="customer-info">
        <h3>{props.customer_name}</h3>
        <p>{props.hashtag_icon}{props.customer_id}</p>
        <p>{props.mobile_icon}{props.customer_mobile}</p>
        <p>{props.email_icon}{props.customer_email}</p>
      </div>
    </div>
    <div className="customer-info-more">
      <div className="last-order">
        <h4>{props.order_date}</h4>
        <span>{props.status}</span>
      </div>
      <div className="total-orders">
        <h4>{props.total_order}</h4>
        <span>{props.order_title}</span>
      </div>

    </div>
  </div>      
  )
}
