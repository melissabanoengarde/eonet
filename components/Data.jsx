import React from "react";
import Link from "next/link";

const Data = ({ title, date, source }) => {
  return (
    <div className="p-8 fixed bottom-[2rem] left-[2rem] z-[8] text-white bg-[#8e574e5f] bg-[url(/gr.png)] bg-repeat bg-500 backdrop-blur-[8px] border-[0.5px] border-[rgba(255,185,178,0.615)] rounded-lg overflow-hidden">
      <ul className=" flex gap-8 font-ips">
        <li>
          <p className="text-[0.75rem] uppercase font-normal mb-2">Title</p>
          <p className="text-[1rem] uppercase">{title ? title : ""}</p>
        </li>
        <li>
          <p className="text-[0.75rem] uppercase font-normal mb-2">Date</p>
          <p className="text-[1rem] uppercase">{date ? date : ""}</p>
        </li>
        <li>
          <p className="text-[0.75rem] uppercase font-normal mb-2">Source</p>
          <Link
            className="text-[1rem] uppercase hover:text-emerald-400"
            href={source ? source : "/"}
            target="_blank"
          >
            {source ? source : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Data;
