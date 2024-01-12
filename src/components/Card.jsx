import { Link } from 'react-router-dom'

import { URL_BASE } from '../../config.js'
import './Card.css';

export const Card = ({ temtem }) => {
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
        <div className='card' style={getCardStyle(temtem.types)}>
            <div className="card__header">
                <div className="header__description">
                    <span className='description__id'>#{temtem.number}</span>                    
                    <h2 className='description__name'> {temtem.name} </h2>
                    <h3 className='description__altura'> Altura: {temtem.details.height.cm} cm </h3>
                    <h3 className='description__peso'>Peso: {temtem.details.weight.kg} Kg </h3>
                </div>
                <img
                    className='header__img'
                    src={URL_BASE + temtem.lumaIcon}
                    alt="temtem"
                />
            </div>
            <div className="card__body">
                <div className='body__stats'>
                    <h3>Stats:</h3>
                    {stats.map((stat, index) => {
                        return (
                            <div key={index} className='stats__item'>
                                <span className='item__name'> {stat.name} </span>
                                <progress className='item__barra' value={stat.value} max={stat.name == 'TOTAL' ? 700 : 100}></progress>
                                <span className='item__numero'> {stat.value} </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="card__footer">
                <div className="footer__type">
                    <h3>Type:</h3>
                    <div className='type__content'>
                        {temtem?.types?.map((type, index) => {
                            return (
                                <span key={index}>{type}</span>
                           );
                        })}
                    </div>
                </div>
                <div className='footer__evolution'>
                    <h5>Evolutions:</h5>
                    <div className="evolution__content">
                        {temtem.evolution.evolutionTree?.map((evo, index) => {
                            return (
                                <span key={index} className='evolution__item'>{evo.name}</span>                       
                            );
                        })}
                    </div>    
                </div>
            </div>
        </div>
    )
}