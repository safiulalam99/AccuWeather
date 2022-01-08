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
    console.log("check", 
    location);
    
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
         console.log("Geolocation is not supported by this browser.");
        }
      }
      function showPosition(position) {
       console.log( "Latitude: " + position.coords.latitude) ;
       console.log( position.coords.longitude);
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
            <div className='button0' >
            <button type="geoLocation" className={styles.button1} onClick={getLocation}>
                Get my location
            </button>
            </div>

        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};
export default Form;
