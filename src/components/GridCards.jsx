import { Card } from './Card.jsx';

import './GridCards.css';

export const GridCards = ({ temtems }) => {
    return (
        <div className='cardss_content'>
            {temtems.map((temtem, index) =>(
                <Card key={index} temtem={temtem}></Card>               
            ))}
        </div>
    )
};