import { Card } from './Card.jsx';

import './GridCards.css';

export const GridCards = ({ temtems, types }) => {       
    return (
        <div className='cards_content container'>
            {temtems.map((temtem, index) =>(
                <Card key={index} temtem={temtem} types={types}/>                           
            ))}
        </div>
    )
};