import React from 'react';
import FruitComponent from './components/FruitComponent'
import VegitableComponent from "./components/VegitableComponent";
import UpdateItems from "./components/UpdateItems";
import {Store} from "./store/store";

const App = () => {
    return (
        <Store>
            <FruitComponent/>
            <VegitableComponent/>
            <UpdateItems/>
        </Store>
    );
}

export default App;

