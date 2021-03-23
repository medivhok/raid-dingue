import React from 'react';
import { Table } from 'reactstrap';

export const ChampionsTable = ({ champions = [] }) => {

    const formatRarity = (rarity) => {
        let formatedRarity;

        switch (rarity) {
            case 'Epic':
                formatedRarity = <strong>Epic</strong>;
                break;

            default:
                formatedRarity = rarity;
        }

        return formatedRarity;
    }

    const championsRows = champions.map((champion) => 
        <tr key={champion.name}>
            <td>{ formatRarity(champion.name) }</td>
            <td>{ formatRarity(champion.rarity) }</td>
            <td>{champion.affinity}</td>
            <td>{champion.role}</td>
            <td>{champion.faction}</td>
        </tr>
    );

    return (
        <Table size="sm" hover>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Rarity</th>
                    <th scope="col">Affinity</th>
                    <th scope="col">Role</th>
                    <th scope="col">Faction</th>
                </tr>
            </thead>

            <tbody>
                { championsRows }
            </tbody>
        </Table>
    );
}
