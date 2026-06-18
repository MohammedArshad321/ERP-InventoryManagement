import React from "react";
import "./Table.css";


export default function Table(props) {

  return (
    <div className="table-container">
      <table className="content-table">
        <thead>
          <tr>
            {props.columns.map((col) => (
              <th key={col.field}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr key={row.id}>
              {props.columns.map((col) => (
                <td key={col.field}>{props.renderCell(row, col.field)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
