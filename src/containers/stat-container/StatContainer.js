import { Statitem } from '../../components/statItem/StatItem';
import { useFetchStats } from '../../hooks/useFetchStats';

import './StatContainer.scss';

export const StatContainer = () => {
  const [data] = useFetchStats({});
  return (
    <section className='stats'>
      {data && data.length ? data.map((stat) => <Statitem {...stat} />) : null}
    </section>
  );
};
