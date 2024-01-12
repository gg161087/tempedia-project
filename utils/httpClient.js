import axios from 'axios';

import {URL_BASE as API} from './../config.js';

export const getDynamic = async (path) => {
    try {
        const { data } = await axios.get(API+'/api/'+path);        
        return data;
    } catch (error) {
        console.error(error);
    }
}