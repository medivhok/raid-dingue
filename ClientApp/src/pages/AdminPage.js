import React, { Component } from 'react';
import { EditChampionForm } from '../forms/EditChampionForm';

export class AdminPage extends Component {
  static displayName = AdminPage.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>

        <p>This is a simple example of a React component.</p>

        <EditChampionForm />
      </div>
    );
  }
}

