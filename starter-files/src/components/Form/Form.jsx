import React from 'react';
import  PropTypes  from 'prop-types';
import { useState } from 'react';

import styles from './Form.module.css';

const  Form = (props) => {
    const [location, setLocation]= useState('')
    const onSubmit = e =>{
        e.preventDefault();
        if(!location || location === '') 
        return;
        props.submitSearch(location);

    }
    return (
        <form onSubmit={onSubmit}>
            
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e=>setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH 
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};
export default Form;
