import React from "react";
import Link from "next/link";

const Data = ({ title, date, source, longitude, latitude }) => {
  return (
    <>
      <div className="fixed top-[2rem] right-[2rem] z-[8] text-white bg-[#8e574e5f] bg-[url(/gr.png)] bg-repeat bg-500 backdrop-blur-[6px] border-[0.5px] border-[rgba(255,185,178,0.615)] border-mix-blend-difference rounded-lg overflow-hidden">
        {title != null && date != null && source != null ? (
          <ul className="p-5 flex gap-8 font-noto">
            <li className="max-w-[400px]">
              <p className="text-[0.75rem] uppercase font-normal mb-1 ">
                Title
              </p>
              <p className="text-[0.75rem] uppercase">{title}</p>
            </li>
            <li>
              <p className="text-[0.75rem] uppercase font-normal mb-1">Date</p>
              <p className="text-[0.75rem] uppercase">{date}</p>
            </li>
            <li className="max-w-[400px] truncate">
              <p className="text-[0.75rem] uppercase font-normal mb-1">
                Source
              </p>
              <Link
                className="text-[0.75rem] uppercase hover:text-emerald-400"
                href={source}
                target="_blank"
              >
                {source}
              </Link>
            </li>
          </ul>
        ) : (
          <p className="py-3 px-5 text-[0.75rem] uppercase animate-pulse">
            Hover on a pin
          </p>
        )}
      </div>

      <div className="fixed bottom-[2rem] left-[2rem] z-[8] text-white mix-blend-difference">
        <ul className="flex gap-6 text-[0.75rem] uppercase font-noto">
          <li>
            <p>Longitude: {longitude}</p>
          </li>
          <li>
            <p>Latitude: {latitude}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Data;
