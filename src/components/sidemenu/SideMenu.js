import { useMemo } from "react";
import { FaReact } from "react-icons/fa";
import { MenuItem } from "./MenuItem";
import "./SideMenu.scss";

const SideMenu = (props) => {
  const menuItems = useMemo(
    () => [
      { icon: "MdSpaceDashboard", text: "Dashboard" },
      { icon: "FaUserAlt", text: "WOW Users" },
      { icon: "FaVideo", text: "Video Clips" },
      { icon: "MdOutlineWarning", text: "Reported Content" },
      { icon: "GrStackOverflow", text: "Category" },
      { icon: "FaInfoCircle", text: "Info Page" },
      { icon: "FaQuestionCircle", text: "Faq" },
    ],
    []
  );
  return (
    <div className="side-menu">
      <div className="logo">
        <FaReact className="icon" /> wow
        <MenuItem icon="MdCancel" onClick={props.show} />
      </div>
      {menuItems.map((item, key) => (
        <MenuItem
          {...item}
          key={item.text}
          className={key === 0 ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default SideMenu;
