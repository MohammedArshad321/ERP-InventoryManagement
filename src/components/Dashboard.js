import React from 'react';

export default function Dashboard(props) {
  return (
    <div className="dashboard-card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <div className="more-info">
        <label>{props.info}</label>
        <i className="icon-arrow">{props.svg}</i>
      </div>
    </div>
  );
}
