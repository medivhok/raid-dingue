import React from 'react';
import { ChampionInfo } from './ChampionInfo';

export default {
    "/champions/:championId": () => <ChampionInfo />
    // "/champions/edit/:championId": () => <EditChampion />
}
