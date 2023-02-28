import { Mapbox } from "../components";

async function getData() {
  const response = await fetch(
    "https://eonet.gsfc.nasa.gov/api/v3/categories/wildfires"
  );
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <h1 className="mainTitle">eonet</h1>
      <Mapbox eonetData={data} />
    </main>
  );
}
