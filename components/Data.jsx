import React from "react";
// import Link from "next/link";

const Data = () => {
  // const { title, description, events } = eonetData;
  // console.log(`in comp: ${events.map((x) => x.title)}`);

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
          <p>Epi Volcano, Vanuatu</p>
        </li>
        <li>
          <p>Date</p>
          <p>2023-01-31T00:00:00Z</p>
        </li>
        <li>
          <p>Source</p>
          <p>https://volcano.si.edu/volcano.cfm?vn=</p>
        </li>
      </ul>
    </div>
  );
};

export default Data;
