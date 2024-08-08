import { useState } from "react";

function Card({id, image, price, name}) {
const[readmore, setReadmore] = useState(false);   
const description =  `{info.substring(0,200)}....`

function readmoreHandler() {
    setReadmore(!readmore);
}

    return (
        <div>
           <img src={image} ></img>
           <div>
            <h4>{price}</h4>
            <h4>{name}</h4>
           </div> 
           <div>
            {description}
            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? 'show less' : 'read more'}
            </span>
           </div>
        </div>
    );
}

export default Card;