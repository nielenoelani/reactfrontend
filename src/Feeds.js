import React, {useContext} from 'react';
import NavBar from './NavBar';

import { AppContext } from './App';

const Feeds = () => {
    
    const [state, setState] = useContext(AppContext);
    
    return (
        <div className = "Feeds">
            <NavBar />
            <div className = "container">
                <h1>The Feeds Page </h1>
                <p> We are the ABC company...</p>
//             
            </div>
        </div>
    
    
    )
}

export default Feeds;
    