import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const Statistics = () => {
  // dropdown props
  const [statisticsDropdownPopoverShow, setStatisticsPopoverShow] = React.useState(false);
  const statisticsBtnDropdownRef = React.createRef();
  const statisticsPopoverDropdownRef = React.createRef();
  const openStatisticsPopover = () => {
    createPopper(statisticsBtnDropdownRef.current, statisticsPopoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setStatisticsPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setStatisticsPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={statisticsBtnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          statisticsDropdownPopoverShow ? closeDropdownPopover() : openStatisticsPopover();
        }}
      >
        Statistics
      </a>
      <div
        ref={statisticsPopoverDropdownRef}
        className={
          (statisticsDropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          All Statistics
        </span>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          ICC Ranking - Men
        </Link>

        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          ICC Ranking - Women
        </Link>
        
       
        
        
      </div>
    </>
  );
};

export default Statistics;
