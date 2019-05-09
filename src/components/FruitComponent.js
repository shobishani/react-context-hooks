import React, {useContext} from 'react';
import {FruitContext} from '../store/contexts';

const FruitComponent = () => {
    const [fruit] = useContext(FruitContext);
    return (
        <div>
            <h1>React with Context + Hooks</h1>
            <h2>Today's fruit is <span className={'title'}>{fruit.name}</span></h2>
        </div>
    );
}

export default FruitComponent;