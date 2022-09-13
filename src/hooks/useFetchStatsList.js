import { useState, useEffect } from 'react';
export const platformLogoMapper = {
  android: 'DiAndroid',
  apple: 'FaApple',
};

export const useFetchStatsList = ({
  startDate = '2022-07-01',
  endDate = '2022-07-14',
}) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await (
        await fetch(
          `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startDate}&todate=${endDate}`
        )
      ).json();
      setData(res?.data?.data || []);
    };
    fetchData();
  }, [startDate, endDate]);

  return [data];
};
