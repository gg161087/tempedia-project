import { useContext } from 'react';

import { GridCards }from '../components/GridCards.jsx';
import { DataContext } from './../contexts/DataContexts.jsx';

export const Home = () => {
    
    const { temtems, types } = useContext(DataContext); 
    console.log(temtems);
      
    return (
        <div>
            <GridCards temtems={temtems}></GridCards>
        </div>
    )
};