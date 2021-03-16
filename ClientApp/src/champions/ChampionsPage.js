import React, { Component } from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from './routes';
import { ChampionsContext } from './ChampionsContext';
import { ChampionsTable } from './ChampionsTable';

export class ChampionsPage extends Component {
  static displayName = ChampionsPage.name;

  constructor(props) {
    super(props);

    this.state = { champions: [] };
    this._context = new ChampionsContext();
  }

  async componentDidMount() {
    const champions = await this._context.getAll();
    this.setState({ champions });
  }

  render() {
    const routeResult = useRoutes(routes);

    return (
      <div>
        <h1>Champions</h1>

        <ChampionsTable champions={this.state.champions} />

        <button type="button" class="btn btn-primary">Ajouter</button>

        {routeResult}

      </div>
    );
  }
}

