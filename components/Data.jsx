import React from "react";
import Link from "next/link";

const Data = ({ title, date, source }) => {
  return (
    // <div
    //   style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: "8" }}
    // >
    //   <div style={{ marginBottom: "2rem" }}>
    //     <p>{title}</p>
    //     <p>{description}</p>
    //   </div>

    //   {events.map((x) => (
    //     <div
    //       key={x.id}
    //       style={{ border: "1px dotted black", marginBottom: "1rem" }}
    //     >
    //       <p>{x.title}</p>
    //       <p>Categorie: {x.categories[0].title}</p>
    //       <p>
    //         <Link href={x.sources[0].url} target="_blank">
    //           Source
    //         </Link>
    //       </p>
    //       <p>Date: {x.geometry[0].date}</p>

    //       <div>
    //         <p>Coordinates:</p>
    //         <p>Latitude: {x.geometry[0].coordinates[0]}</p>
    //         <p>Longitude: {x.geometry[0].coordinates[1]}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
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
