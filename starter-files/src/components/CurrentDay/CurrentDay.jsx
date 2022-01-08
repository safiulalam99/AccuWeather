import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';
import WeatherIcons from '../../hooks/useForcast'
const CurrentDay = ({date,IconPhrase, location, temperature, weatherIcon}) => (

    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb-1temperature">{location}</h2>
                <p className="mb-0"></p>
                <p className="mb-0">{date}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">

                </p>
            </div>
            <div>
            <img width="45" src='sfdf' alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{IconPhrase}</h5>
            
            </div>
        </div>
    </div>
);


// CurrentDay.propTypes = {
   
//     location: PropTypes.string.isRequired,
//     temperature: PropTypes.number.isRequired,
    
// };

export default CurrentDay;
