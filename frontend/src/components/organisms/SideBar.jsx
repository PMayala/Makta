/* eslint-disable react/prop-types */
import SideBarLinks from "../molecules/sideBarLinks";
import logo from "/images/logo.svg";
export default function SideBar({ schoolName }) {
  const defaultLinks = () => {
    const links = [
      {
        title: "Dashboard",
        to: "/dashboard/stats",
      },
      {
        title: "Books",
        to: "/dashboard/books",
      },
      {
        title: "Members",
        to: "/dashboard/members",
      },
      {
        title: "Issues",
        to: "/dashboard/issues",
      },
      {
        title: "Profile",
        to: "/dashboard/profile",
      },
    ];
    return links;
  };
  return (
    <div className="flex flex-col h-screen top-0 mt-0 space-y-2 py-5 w-80 bg-blue-950">
      <img src={logo} alt="logo" className="w-20 h-20 self-center my-5" />
      <p className="text-white font-kumbh font-semibold self-center">{schoolName}</p>
      <hr className="w-full py-3" />
      <SideBarLinks links={defaultLinks()} />
    </div>
  );
}
