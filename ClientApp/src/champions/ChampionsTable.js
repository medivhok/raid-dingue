import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ChampionsTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Faction</th>
                        <th scope="col">Affinit&eacute;</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.champions.map((champion) => 
                    <tr>
                        <td><Link to="/champion">{champion.name}</Link></td>
                        <td>{champion.faction.name}</td>
                        <td>{champion.affinity.name}</td>
                    </tr>)}
                </tbody>
            </table>
        );
    }
}