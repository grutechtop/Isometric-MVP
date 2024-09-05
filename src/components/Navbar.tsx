"use client";

import Link from "next/link";
import React, { useState } from "react";
import BuildingOfficeIcon from "./SVGIcons/BuildingIcon";
import ClockIcon from "./SVGIcons/ClockIcon";
import ChartBarIcon from "./SVGIcons/ChartBarIcon";
import SearchIcon from "./SVGIcons/SearchIcon";
import UserIcon from "./SVGIcons/UserIcon";

export default function Navbar(): React.ReactNode {
  const [isSelected, setSelected] = useState<string>("Isometric");

  return (
    <div className="pt-10">
      <nav className="flex justify-center w-screen">
        <ul className="flex flex-row justify-center z-30 bg-white w-80 rounded-xl shadow-xl gap-5 h-16 align-middle">
          <li className="tag flex h-12 w-16 mt-2 rounded-xl justify-center ">
            <Link
              href="#"
              className={
                isSelected === "Isometric"
                  ? "block h-full transition ease-in delay-150 content-center py-2 px-3 text-white bg-amber-950 rounded hover:translate-x-0 hover:bg-amber-950 hover:bg-opacity-50"
                  : "block h-full transition ease-in delay-150 content-center py-2 px-3 text-amber-950 bg-white rounded hover:translate-x-0 hover:bg-amber-950 hover:bg-opacity-50"
              }
              onClick={() => setSelected("Isometric")}
              aria-current="page"
            >
              <BuildingOfficeIcon width={30} height={30} />
            </Link>
          </li>
          <li className="flex h-12 w-16 mt-2 rounded-xl justify-center">
            <Link
              href="#"
              className={
                isSelected === "Time"
                  ? "block h-full transition ease-in delay-150 content-center py-2 px-3 text-white bg-amber-950 rounded hover:bg-amber-950 hover:translate-x-0 hover:bg-opacity-50"
                  : "block h-full transition ease-in delay-150 content-center py-2 px-3 text-amber-950 bg-white rounded hover:bg-amber-950 hover:translate-x-0 hover:bg-opacity-50"
              }
              onClick={() => setSelected("Time")}
            >
              <ClockIcon width={30} height={30} />
            </Link>
          </li>
          <li className="flex h-12 w-16 mt-2 rounded-xl justify-center">
            <Link
              href="#"
              className={
                isSelected === "Chart"
                  ? "block h-full transition ease-in delay-150 content-center py-2 px-3 text-white bg-amber-950 rounded hover:bg-amber-950 hover:translate-x-0 hover:bg-opacity-50"
                  : "block h-full transition ease-in delay-150 content-center py-2 px-3 text-amber-950 bg-white rounded hover:bg-amber-950 hover:translate-x-0 hover:bg-opacity-50"
              }
              onClick={() => setSelected("Chart")}
            >
              <ChartBarIcon width={30} height={30} />
            </Link>
          </li>
          <li className="flex h-12 w-16 mt-2 rounded-xl justify-center">
            <Link
              href="#"
              className={
                isSelected === "Search"
                  ? "block h-full transition ease-in delay-150 content-center py-2 px-3 text-white bg-amber-950 rounded hover:bg-amber-950 hover:translate-x-0 hover:bg-opacity-50"
                  : "block h-full transition ease-in delay-150 content-center py-2 px-3 text-amber-950 bg-white rounded hover:bg-amber-950 hover:translate-x-0 hover:bg-opacity-50"
              }
              onClick={() => setSelected("Search")}
            >
              <SearchIcon width={30} height={30} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end h-16 w-full -mt-16 -ml-12">
        <div className="flex h-16 justify-center rounded-xl w-16 text-amber-950 bg-white shadow-xl">
          <div className="content-center">
            <UserIcon width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
