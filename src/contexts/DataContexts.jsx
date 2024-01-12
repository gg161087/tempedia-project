import { createContext, useState, useEffect } from 'react';
import { getDynamic } from '../../utils/httpClient.js';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [temtems, setTemtems] = useState([]);
    const [types, setTypes] = useState([]);
    const [items, setItems] = useState([]);

    const getTemtems = async () => {
        const response = await getDynamic('temtems');        
        if (response) {
            setTemtems(response);
        }
    }  
    const getTypes = async () => {
        const response = await getDynamic('types');        
        if (response) {
            setTypes(response);
        }
    }   
    const getItems = async () => {
        const response = await getDynamic('items');        
        if (response) {
            setItems(response);
        }
    }

    useEffect(() =>{
        getTemtems()
        getTypes()  
        getItems()            
    },[])

    if (!temtems) {
        return (
            <div className="container">
                <h2>Loading</h2>
            </div>
        )
    }
    
    return (
        <DataContext.Provider value={
            { 
                temtems,
                types,
                items
            }
        }>
            {children}
        </DataContext.Provider>
    );
};