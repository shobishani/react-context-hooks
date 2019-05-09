import React, {useContext} from 'react';
import {VegitableContext} from '../store/contexts';

const VegitableComponent = () => {
    const [vegitable] = useContext(VegitableContext);
    return (
        <div>
            <h2>Today's Vegitable is <span className={'title'}>{vegitable.name}</span></h2>
        </div>
    );
};

export default VegitableComponent;