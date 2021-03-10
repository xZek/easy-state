//Clock Test  -- Test3

import React, { useEffect } from 'react';
import moment  from 'moment';
import {view,store} from '@risingstack/react-easy-state';

function getFormatDateTime(){
    return moment()
    .utc()
    .format('hh:mm:ss A');
}

export default view(() => {
    const clock = store({
        time:getFormatDateTime()
    });
    useEffect(() => {
    const id = setInterval(
        () => (clock.time = getFormatDateTime()),
        1000,
    );
    return () => clearInterval(id);
        }, []);
        return <div>{clock.time}</div>
});


/*

//Test 1

import React from 'react';
import {view,store} from '@risingstack/react-easy-state'

const user = store({ name : 'Zek'});

export default view(() =>(

<div>
    <input value={user.name} 
           onChange={ev => (user.name = ev.target.value)}
    />
    <p>Merhaba {user.name}</p>

</div>



    )

);



// Test 2

import React from 'react';
import { view, store } from '@risingstack/react-easy-state';


function GetButton(){
    
const counter= store({ num : 0});
const increment = () => counter.num++;

return  <button onClick={increment}>{counter.num}</button>

  
}

export default view(GetButton);
*/
