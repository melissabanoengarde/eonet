import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-[8] fixed bottom-[1.9rem] right-[2rem] text-white mix-blend-difference">
      <ul className="text-[0.65rem] flex gap-8 uppercase">
        <li>
          <p>
            data —{" "}
            <Link href="/" className="hover:text-emerald-400">
              Earth Observatory Natural Event Tracker API by NASA
            </Link>
          </p>
        </li>
        <li>
          <p>
            map —{" "}
            <Link href="/" className="hover:text-emerald-400">
              mapboxgl
            </Link>
          </p>
        </li>
        <li>
          <p>
            2023, Developed by{" "}
            <Link href="/" className="hover:text-emerald-400">
              Melissa Banoen-Garde
            </Link>
          </p>
          {/* <p>Hosted on Vercel</p> */}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
