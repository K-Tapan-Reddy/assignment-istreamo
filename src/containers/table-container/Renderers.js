import moment from 'moment';
import { MenuItem } from '../../components/sidemenu/MenuItem';

export const DateRenderer = ({ value }) => {
  return <span>{moment(value).format('DD MMMM YYYY')}</span>;
};

export const InstallPlateFormRenderer = ({ data }) => {
  return (
    <div>
      <div>
        <MenuItem icon='DiAndroid' text={data.android_install || ''} />
        <MenuItem icon='FaApple' text={data.ios_install || ''} />
      </div>
    </div>
  );
};
export const UnInstallPlateFormRenderer = ({ data }) => {
  return (
    <div>
      <div>
        <MenuItem icon='DiAndroid' text={data.android_uninstall || ''} />
        <MenuItem icon='FaApple' text={data.ios_uninstall || ''} />
      </div>
    </div>
  );
};
export const ChurnRenderer = ({ data }) => {
  return (
    <div>
      <div>
        <MenuItem icon='DiAndroid' text={data.android_churn || ''} />
        <MenuItem icon='FaApple' text={data.ios_churn || ''} />
      </div>
    </div>
  );
};
