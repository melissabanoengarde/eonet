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
    <main className="font-ips w-full h-[100vh] overflow-hidden cursor-crosshair">
      <h1 className="inline-block fixed md:top-[1.5rem] md:left-[2rem] z-[8] md:text-[2.5rem] text-white ">
        eonet/wildfires
      </h1>

      <Mapbox eonetData={data} />
    </main>
  );
}
