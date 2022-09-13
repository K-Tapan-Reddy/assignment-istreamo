import { MenuItem } from '../sidemenu/MenuItem';
import './StatItem.scss';
export const Statitem = ({ icon, value, title }) => {
  return (
    <div className='stat-item'>
      <MenuItem icon={icon} />
      <div>
        <div>{value}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};
