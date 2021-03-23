import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { MainHeader } from './templates/MainHeader';
import { HomePage } from './pages/HomePage';
import { ChampionsSection } from './templates/ChampionsSection';

import '../assets/custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <MainHeader />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/champions" component={ChampionsSection} />
          </Switch>
        </Container>
      </div>
    );
  }
}
