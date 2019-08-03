import React, {useContext} from 'react';


const FeedMedia = () => {
    
    const [state, setState] = useContext(AppContext);
    
    return (
        <div className = "feed media">
            <img src = "https://cdn4.buysellads.net/uu/1/41369/1551199042-Adobe_Stock_260x200-3.jpg " class="mr-3"
            <div className = "container">
                <h1>The Feeds Page </h1>
                <p> We are the ABC company...</p>
                <FeedMedia />
            </div>
        </div>
    
    
    )
}

export default FeedMedia;