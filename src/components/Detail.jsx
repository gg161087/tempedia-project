import { useState } from 'react';

import { URL_BASE } from './../../config.js';
import './Detail.css';

export const Detail = ({show, temtem, close}) => {
    
    if (!temtem) {
        return
    }
    
    const stats = Object.entries(temtem.stats).map(([key, value]) => ({
        name: key.toUpperCase(),
        value
    }));
    
    const getCardStyle = (types) => {
        let cardStyle = {};

        const typeColors = {
            Neutral: '#a4acaf',
            Fire: '#ff7402',
            Water: '#4592c4',
            Nature: '#729f3f',
            Electric: '#bba909',
            Earth: '#9bcc50',
            Mental: '#f366b9',
            Wind: '#3dc7ef',
            Digital: '#757575',
            Melee: '#d56723',
            Crystal: '#fdb9e9',
            Toxic: '#7e0058'
        };

        if (types.length === 1) {
            cardStyle.backgroundColor = typeColors[types[0]];
        } else {
            cardStyle.backgroundImage = `linear-gradient(to right, ${types.map(type => typeColors[type]).join(', ')})`;
        }

        return cardStyle;
    };

    return (
        <div className="modal-container" onClick={close} style={{ display: show ? 'grid' : 'none'}}>
            <section className="modal-body">
                <div className="img-container">
                    <img src={URL_BASE + temtem.lumaIcon} alt={temtem.name} className="img-detail" />
                    <section>
                        {temtem.types?.map(type => <span key={type} className='tag'>{type}</span>)}
                    </section>
                </div>
                <div className="data">
                    <h2 className="title">{temtem.name} ({temtem.number})</h2>
                    <h3 className="title-section">Habilidades</h3>
                    {temtem.abilities?.map(ability => <span className='tag'>{ability}</span>)}

                    <h3 className="title-section">Estadisticas</h3>
                    <div className='stats'>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}