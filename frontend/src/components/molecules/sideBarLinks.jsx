/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import SideBarLink from '../atoms/SideBarLink';
export default function SideBarLinks({links=[]}){
    const location = useLocation();
    let activeIndexAuto = links.findIndex((link) =>
      location.pathname.startsWith(link.to)
    );
return(
<>
{links.map((link, i) => (
        <SideBarLink
          key={i}
          title={link.title}
          to={link.to}
          iconLink={link.iconLink}
          active={activeIndexAuto === i}
        />
      ))}
</>
)
}