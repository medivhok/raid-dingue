import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChampionListPage } from '../pages/ChampionListPage';
// import { ChampionInfoPage } from '../pages/ChampionInfoPage';

export const ChampionsSection = ({ match = {} }) => {

  const { path } = match;

  return (
    <div>
      <h1>Champions</h1>
      <Switch>
        <Route path={`${path}`} component={ChampionListPage}>
          <ChampionListPage />  
        </Route>

      </Switch>
    </div>
  );
}


