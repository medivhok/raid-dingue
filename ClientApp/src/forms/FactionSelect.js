import React, { useEffect, useState } from 'react';
import { RaidData } from '../services/RaidContext';

function FactionSelect() {
    const raidData = new RaidData;
    const [list, setList] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        raidData.getFactions()
            .then(items => {
                if(mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])

    return(
        <select class="custom-select">
           {list.map(item => <option value={item.name}>{item.name}</option>)}
        </select>
    ) 
}

export default FactionSelect;
