import React, { Component } from 'react';


function MenuItem(props)  {
    return ( 
        <div>
            <span>{props.dish.name}</span>
        </div>
     );
}

export default MenuItem;