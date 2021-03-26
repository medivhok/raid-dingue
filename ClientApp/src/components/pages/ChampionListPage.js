import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from 'reactstrap';
import { ChampionsTable } from '../UI/organisms/ChampionsTable';

export const ChampionListPage = () => {
  const { loading, data } = useSelector(state => state.champions);

  return (
    <div>
      <ChampionsTable loading={loading} champions={data} />

        <Badge color="primary" href="/champions/add" pill>+ Add Champion</Badge>

      </div>
  );
};

