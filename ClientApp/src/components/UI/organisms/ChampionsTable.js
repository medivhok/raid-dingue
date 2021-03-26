import React from 'react';
import { Table } from 'reactstrap';

export const ChampionsTable = ({ loading, champions = [] }) => {

    let tableContent;

    if (loading) {
        tableContent = <tr>
            <td colSpan="5">
                <span>Loading champions...</span>     
            </td></tr>;
    } else if (champions.length === 0) {
        tableContent = <tr>
            <td colSpan="5">
                <span>No champions found!</span>
            </td>
            </tr>;
    } else {
        tableContent = champions.map((champion) => 
            <tr key={champion.name}>
                <td>{ champion.name }</td>
                <td>{ champion.rarity }</td>
                <td>{champion.affinity}</td>
                <td>{champion.role}</td>
                <td>{champion.faction}</td>
            </tr>);
    }

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
                { tableContent }
            </tbody>
        </Table>
    );
}
