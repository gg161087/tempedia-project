import { useState } from 'react';

import { Detail } from './Detail.jsx';

import { URL_BASE } from '../../config.js';
import './Card.css';

export const Card = ({ temtem }) => {  

    const [show, setShow] = useState(false); 

    const openDetail = () => {
        setShow(true)
    };
    const closeDetail = () => {
        setShow(false)
    }

    return (
        <>
            <Detail show={show} temtem={temtem} close={closeDetail}></Detail> 
            <div className='card' onClick={openDetail}>           
                <img src={URL_BASE + temtem.lumaIcon} alt={temtem.name} className='card__img' />
                <p className='card__title'>
                    <span>#{temtem.number}</span>
                    <span>{temtem.name}</span>
                </p>
            </div>
        </>
    )
}