import React from "react";
import Link from "next/link";

const Data = ({ title, date, source }) => {
  return (
    <div className="databox">
      <ul>
        <li>
          <p>Title</p>
          <p>{title ? title : ""}</p>
        </li>
        <li>
          <p>Date</p>
          <p>{date ? date : ""}</p>
        </li>
        <li>
          <p>Source</p>
          <Link href={source ? source : "/"} target="_blank">
            {source ? source : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Data;
