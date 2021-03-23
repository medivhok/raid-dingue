import React, { useEffect, useState } from 'react';
import { RaidContext } from '../../store/RaidContext';

function AffinitySelect() {
    const raidData = new RaidContext;
    const [list, setList] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        raidData.getAffinities()
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

export default AffinitySelect;
