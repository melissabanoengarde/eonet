import { IBM_Plex_Sans } from "next/font/google";
// import "mapbox-gl/dist/mapbox-gl.css";
import { Data, Mapbox } from "../components";

const ips = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className={ips.className}>
      <Mapbox />
      <Data />
    </main>
  );
}
