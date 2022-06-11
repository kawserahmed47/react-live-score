import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const TeamsDropdown = () => {
  // dropdown props
  const [teamsDropdownPopoverShow, setTeamsDropdownPopoverShow] = React.useState(false);
  const teamBtnDropdownRef = React.createRef();
  const seriesPopoverDropdownRef = React.createRef();
  const openTeamDropdownPopover = () => {
    createPopper(teamBtnDropdownRef.current, seriesPopoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setTeamsDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setTeamsDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={teamBtnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          teamsDropdownPopoverShow ? closeDropdownPopover() : openTeamDropdownPopover();
        }}
      >
        Teams
      </a>
      <div
        ref={seriesPopoverDropdownRef}
        className={
          (teamsDropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Test Teams
        </span>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Afghanistan
        </Link>

        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Bangladesh
        </Link>

        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          India
        </Link>
        
       
        
        
      </div>
    </>
  );
};

export default TeamsDropdown;
