import React from 'react';
import {view} from '@risingstack/react-easy-state';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import appStore from './comp/appStore';

const { Search } = Input;





const Navbar = () => (

    <div className="searchBar">
       <Search
        onSearch={appStore.fetchBeers} 
        placeholder="Text.."
        enterButton="Search"
        size="large"
        style={{width :'30%'}}
         />
       
        
    </div>
);

export default view(Navbar);