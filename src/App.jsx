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



