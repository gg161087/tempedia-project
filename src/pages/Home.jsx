import { useState, useContext } from 'react';

import { Header } from './../partials/Header.jsx'
import { GridCards }from './../components/GridCards.jsx';
import { Footer } from './../partials/Footer.jsx'

import { DataContext } from './../contexts/DataContexts.jsx';

export const Home = () => {

    const [search, setSearch] = useState('');
    const { temtems, types } = useContext(DataContext); 

    const filterTemtems = search?.length > 0
        ? temtems?.filter(temtem => temtem?.name?.includes(search))
        : temtems

    const getSearch = (e) => {
        const texto = e.charAt(0).toUpperCase() + e.slice(1)
        setSearch(texto)        
    }
    
    return (
        <>  
            <Header getSearch={getSearch}></Header>
            <GridCards temtems={filterTemtems} types={types}></GridCards>
            <Footer></Footer>
        </>
    )
};