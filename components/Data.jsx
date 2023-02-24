import React from "react";

async function getData() {
  const response = await fetch(
    "https://eonet.gsfc.nasa.gov/api/v3/categories/volcanoes"
  );
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

const Data = async () => {
  const data = await getData();
  const { title, description, events } = data;
  // console.log(`in comp: ${events.map((x) => x.title)}`);

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <p>{title}</p>
        <p>{description}</p>
      </div>

      {events.map((x) => (
        <div
          key={x.id}
          style={{ border: "1px dotted black", marginBottom: "1rem" }}
        >
          <p>{x.title}</p>
          <p>Categorie: {x.categories[0].title}</p>
          <p>Source: {x.sources[0].url}</p>
          <p>Date: {x.geometry[0].date}</p>

          <div>
            <p>Coordinates:</p>
            <p>Latitude: {x.geometry[0].coordinates[0]}</p>
            <p>Longitude: {x.geometry[0].coordinates[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
