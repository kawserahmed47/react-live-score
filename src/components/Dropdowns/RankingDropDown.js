import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const RankingDropdown = () => {
  // dropdown props
  const [rankingDropdownPopoverShow, setRankingDropdownPopoverShow] = React.useState(false);
  const rankingBtnDropdownRef = React.createRef();
  const rankingPopoverDropdownRef = React.createRef();
  const openRankingDropdownPopover = () => {
    createPopper(rankingBtnDropdownRef.current, rankingPopoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setRankingDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setRankingDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={rankingBtnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          rankingDropdownPopoverShow ? closeDropdownPopover() : openRankingDropdownPopover();
        }}
      >
        Rankings
      </a>
      <div
        ref={rankingPopoverDropdownRef}
        className={
          (rankingDropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          All Ranks
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

export default RankingDropdown;
