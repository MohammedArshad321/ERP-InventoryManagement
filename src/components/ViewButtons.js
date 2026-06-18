import React from "react";
import "./ViewButtons.css";
import { Link } from "react-router-dom";
import { FiList, FiGrid } from "react-icons/fi";


export default function ViewButtons(props) {
  return (
    <div className="list-and-grid-btn">
      <Link to={props.link_to_grid}>
        <button>
          <FiGrid />
        </button>
      </Link>
      <Link to={props.link_to_list}>
        <button>
          <FiList />
        </button>
      </Link>
    </div>
  );
}
