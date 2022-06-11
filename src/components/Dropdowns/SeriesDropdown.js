import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const SeriesDropdown = () => {
  // dropdown props
  const [seriesDropdownPopoverShow, setseriesDropdownPopoverShow] = React.useState(false);
  const seriesBtnDropdownRef = React.createRef();
  const seriesPopoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(seriesBtnDropdownRef.current, seriesPopoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setseriesDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setseriesDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={seriesBtnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          seriesDropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Series
      </a>
      <div
        ref={seriesPopoverDropdownRef}
        className={
          (seriesDropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Recent Series
        </span>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Afghanistan tour of Zimbabwe, 2022
        </Link>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
         Australia tour of Sri Lanka, 2022
        </Link>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          South Africa tour of India, 2022
        </Link>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Bangladesh tour of West Indies, 2022
        </Link>
       
        
        
      </div>
    </>
  );
};

export default SeriesDropdown;
