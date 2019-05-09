import React, {useState} from 'react';
import {VegitableContext, FruitContext} from './contexts';

export const Store = ({children}) => {
    const [fruit, setFruit] = useState({name: 'Apple'});
    const [vegitable, setVegitable] = useState({name: 'Tomato'});
    return (
        <FruitContext.Provider value={[fruit, setFruit]}>
            <VegitableContext.Provider value={[vegitable, setVegitable]}>
                {children}
            </VegitableContext.Provider>
        </FruitContext.Provider>
    );
};
