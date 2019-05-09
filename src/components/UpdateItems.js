import React, {useContext} from 'react';
import {FruitContext, VegitableContext} from '../store/contexts';

const UpdateItems = () => {
    const [fruit, setFruit] = useContext(FruitContext);
    const [vegitable, setVegitable] = useContext(VegitableContext);
    const updateFruit = () => {
        const fruits = ['Mango', 'Orange', 'Strawbarry', 'Falsa'];
        console.log('old fruit is ', fruit.name);
        setFruit({name: fruits[Math.floor((Math.random() * 4))]});
    };
    const updateVegitable = () => {
        const vegs = ['Tomato', 'Potato', 'Kaddu', 'Teendy'];
        console.log('old vegitable is', vegitable);
        setVegitable({name: vegs[Math.floor((Math.random() * 4))]});
    };
    return (
        <div>
            <div>
                <h2>Update Fruit:
                    <button className={'btn'} onClick={updateFruit}>Update Fruit</button>
                </h2>
            </div>
            <div>
                <h3>Update Vegitable:
                    <button className={'btn'} onClick={updateVegitable}>Update Vegitable</button>
                </h3>
            </div>
        </div>
    );
};

export default UpdateItems;