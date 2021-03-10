import React from 'react';
import {view,store} from '@risingstack/react-easy-state';
import { Card } from 'antd';

const { Meta } = Card;


const Beer = ({
    name,
    description,
    image_url: imageUrl,
    food_pairing : foodPairing,

}) =>{
    const beer = store({ details : false });


    return(

    <Card 

    onClick={() => {  beer.details = !beer.details; }}
    className="beer"
    style={{ width: 240 }}
    cover= {!beer.details && (
        <img
          src={imageUrl} 
        />
     )      
    }
    >

        {!beer.details ? (
            <Meta title={name} description={description} />
        ) : (
            <ul>
            {foodPairing.map(food => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        )} 
        </Card>
        );
    };
export default view(Beer); 