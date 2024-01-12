import { Card } from './Card.jsx';

import './GridCards.css';

export const GridCards = ({ temtems }) => {       
    const find = async (e) => {
        e.preventDefault()    
        if (!search) return    
        const result = search //logica de buscar        
        setShow({ show: true, result })
    }
     
    return (
        <div className='cards_content'>
            {temtems.map((temtem, index) =>(
                <Card key={index} temtem={temtem}/>                           
            ))}
        </div>
    )
};