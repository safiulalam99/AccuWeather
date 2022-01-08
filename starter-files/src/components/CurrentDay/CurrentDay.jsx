import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from './assets/cloudy-day-1.svg';
import styles from './CurrentDay.module.css';
import WeatherIcons from '../../hooks/useForcast'
const CurrentDay = ({date,IconPhrase, location, temperature}) => (

    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div id='mik'>
                <h2 className="font-weight-bold mb-1temperature">{location}</h2>
                <p className="mb-0">{date}</p>

                
            </div>
            <div>
            <img width="45" src='sfdf' alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span id='name'>{temperature}</span>°C
                </h2>
                  <img className="mr-1"  width="100" height="100" src={locationIcon} alt="location pin icon" />
                <h5 className="font-weight-lighter">  {IconPhrase}</h5>
            
            </div>
        </div>
    </div>
);


// CurrentDay.propTypes = {
   
//     location: PropTypes.string.isRequired,
//     temperature: PropTypes.number.isRequired,
    
// };

export default CurrentDay;
