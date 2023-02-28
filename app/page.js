import Link from "next/link";
import { Mapbox, Footer } from "../components";

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
    <main className="w-full h-[100vh] overflow-hidden cursor-crosshair">
      <h1 className="inline-block fixed md:top-[2rem] md:left-[2rem] z-[8] md:text-[1rem] text-white uppercase mix-blend-difference">
        <Link href="/">eonet/wildfires</Link>
      </h1>

      <Mapbox eonetData={data} />

      <Footer />
    </main>
  );
}
