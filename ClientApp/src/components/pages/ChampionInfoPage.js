import React, { Component } from 'react';
import { ChampionForm } from '../organisms/ChampionForm';

export class ChampionInfoPage extends Component {
    static displayName = ChampionInfoPage.name;

    render() {
        return (
            <div>
                <ChampionForm />
            </div>
        );
    }
}