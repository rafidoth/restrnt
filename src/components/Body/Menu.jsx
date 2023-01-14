import React, { Component } from 'react';
import DISHES  from '../../data/dishes';
import MenuItem from './MenuItem';

class Menu extends Component {
    state = { 
        dishes : DISHES
     } 
    render() { 
        const item = this.state.dishes.map((item)=>{
            return (
                <MenuItem dish = {item} key = {item.id}/>
            );
        })
        return (
            <div className='d-flex justify-content-between'>
                {item}
            </div>
        );
    }
}
 
export default Menu;