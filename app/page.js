import { IBM_Plex_Sans } from "next/font/google";
// import "mapbox-gl/dist/mapbox-gl.css";
import { Data, Mapbox } from "../components";

const ips = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"] });

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

export default async function Home() {
  const data = await getData();

  return (
    <main
      className={ips.className}
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <Mapbox eonetData={data} />
      <Data />
    </main>
  );
}
