import { useState } from 'react';

import { Detail } from './Detail.jsx';

import { URL_BASE } from '../../config.js';
import './Card.css';

export const Card = ({ temtem, types }) => {  

    const [show, setShow] = useState(false); 

    const openDetail = () => {
        setShow(true)
    };
    const closeDetail = () => {
        setShow(false)
    }

    const stats = Object.entries(temtem.stats).map(([key, value]) => ({
        name: key.toUpperCase(),
        value
    }));

    const getTypeStyle = (type) => {
        const bg = {
            Neutral: '#A1ADAF',
            Fire: '#FB8B6C',
            Water: '#7DDCF3',
            Nature: '#B6E898',
            Electric: '#F2DE7C',
            Earth: '#BE8A6E',
            Mental: '#EA9DDA',
            Wind: '#7ADEDB',
            Digital: '#7E9497',
            Melee: '#FFA561',
            Crystal: '#E85570',
            Toxic: '#5F5C5E'
        };
        const color = {
            Neutral: '#3C4F61',
            Fire: '#672016',
            Water: '#0E7198',
            Nature: '#3F5D20',
            Electric: '#8C5C00',
            Earth: '#58321D',
            Mental: '#691E67',
            Wind: '#056B5B',
            Digital: '#203537',
            Melee: '#203537',
            Crystal: '#5E0A18',
            Toxic: '#1B191D'
        };

        let cardStyle = { backgroundColor: '', color: ''};
        cardStyle.backgroundColor = bg[type];
        cardStyle.color = color[type]
        getTypeIcon(type)
        return cardStyle;
    };
    const getTypeIcon = (type) => {
        const { icon } = types.find(element => element.name == type)
        return icon
    }
    
    return (
        <>
            <Detail show={show} temtem={temtem} close={closeDetail}></Detail> 
            <div className='card' onClick={openDetail}>
                <div className='card__body'>
                    <div className='card__body-img'>
                        <img src={URL_BASE + temtem.icon} alt={temtem.name}/>
                        <span className='card__body-id'>{temtem.number}</span>
                    </div>
                    <div className='card__body-types'>
                        {temtem.types.map((type, index) => (
                            
                            <div className='type' style={getTypeStyle(type)} key={index}>                                
                                <img className='icon' src={URL_BASE + getTypeIcon(type)} alt="icon element"/>
                                <span>{type}</span>
                            </div>
                        ))}
                    </div>
                    <div className='card__body-name'>
                        <span>{temtem.name}</span>
                    </div>
                </div>                    
            </div>
        </>
    )
}