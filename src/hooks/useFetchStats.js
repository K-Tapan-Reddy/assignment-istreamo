import { useState, useEffect } from 'react';

export const logoMapper = {
  activeinstall: { icon: 'GrInstall', position: 1, title: 'Active Installs' },
  aliveappusers: { icon: 'FaUsers', position: 4, title: 'Alive Apps Users' },
  alivechurn: {
    icon: 'MdPublishedWithChanges',
    position: 5,
    title: 'Alive Churn Rate',
  },
  churn: { icon: 'FaPercent', position: 2, title: 'Churn Rate' },
  totalInstall: { icon: 'GrDownload', position: 0, title: 'App Installed' },
  totaluninstall: { icon: 'CgBlock', position: 3, title: 'App Un-Installed' },
};

export const useFetchStats = ({
  fromDate = '2022-07-01',
  toDate = '2022-07-14',
}) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await (
        await fetch(
          `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${fromDate}&todate=${toDate}`
        )
      ).json();
      const keys = Object.keys(res.data);
      const stats = [];
      keys.forEach((key) => {
        stats[logoMapper[key].position] = {
          value: res.data[key],
          ...logoMapper[key],
        };
      });
      setData(stats);
    };
    fetchData();
  }, [fromDate, toDate]);

  return [data];
};
