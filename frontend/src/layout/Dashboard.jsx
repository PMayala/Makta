/* eslint-disable react/prop-types */

import SideBar from "../components/organisms/SideBar";
import { useContext } from "react";
import { MainContext } from "../context/AppContext";
export default function Dashboard({ children }) {
  const { user } = useContext(MainContext);
  return (
    <div className="w-full flex h-screen">
      <div className="sticky h-screen top-0 capitalize">
        <SideBar schoolName={user.schoolname} />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
