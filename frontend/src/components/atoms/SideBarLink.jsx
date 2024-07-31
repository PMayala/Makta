/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function SideBarLink(props) {
  return (
    <div className={`${props.active ? "bg-green-500" : "bg-transparent"} px-3 py-3 mx-7 my-2 rounded-md text-sm font-kumbh`}>
      <Link to={props.to} className="text-white font-semibold">
        {props.title}
      </Link>
    </div>
  );
}
