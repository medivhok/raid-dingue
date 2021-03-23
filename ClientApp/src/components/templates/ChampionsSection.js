import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChampionListPage } from '../pages/ChampionListPage';
// import { ChampionInfoPage } from '../pages/ChampionInfoPage';

export class ChampionsSection extends Component {
  static displayName = ChampionsSection.name;

  render() {
    const { path } = this.props.match;

    return (
      <div>
        <h1>Champions</h1>
        <Switch>
          <Route path={`${path}`} component={ChampionListPage}>
            <ChampionListPage context={this._champions} />  
          </Route>

        </Switch>
      </div>
    );
  }
}

