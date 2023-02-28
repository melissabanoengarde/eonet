import { IBM_Plex_Sans } from "next/font/google";
// import "mapbox-gl/dist/mapbox-gl.css";
import { Data, Mapbox3, Mapbox, Mapbox2 } from "../components";

const ips = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"] });

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
    <main
      className={ips.className}
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <h1 className="mainTitle">eonet</h1>
      {/* <Mapbox eonetData={data} /> */}
      {/* <Mapbox2 eonetData={data} /> */}
      <Mapbox3 eonetData={data} />
      {/* <Data /> */}
    </main>
  );
}
