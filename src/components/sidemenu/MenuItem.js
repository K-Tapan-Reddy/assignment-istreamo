import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as GiIcons from "react-icons/gi";

export const MenuItem = ({ icon, text, onClick = () => {}, className }) => {
  const IconImage =
    MdIcons[icon] ||
    FaIcons[icon] ||
    GrIcons[icon] ||
    CgIcons[icon] ||
    DiIcons[icon] ||
    GiIcons[icon];
  return (
    <div className={`menu-item ${className || ""}`}>
      <IconImage className="icon" onClick={onClick} />
      {text !== undefined || text !== null ? <span>{text}</span> : null}
    </div>
  );
};
