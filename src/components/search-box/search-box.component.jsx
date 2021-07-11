import { placeholder } from '@babel/types';
import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        // onChange={(event) => {
        // this.setState({ searchField: event.target.value }, () => console.log(this.state))
        // console.log(event.target.value)}} 
        onChange={handleChange}
    />
);