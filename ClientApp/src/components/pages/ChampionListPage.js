import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from 'reactstrap';
import { ChampionsTable } from '../organisms/ChampionsTable';

export const ChampionListPage = () => {
  const champions = useSelector(state => state.champions);

  return (
    <div>
      <ChampionsTable champions={champions.data} />

        <Badge color="primary" href="/champions/add" pill>+ Add Champion</Badge>

      </div>
  );
};

