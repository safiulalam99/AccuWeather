import React, { Fragment } from 'react';
import styles from './Page.module.css'
import Header from '../Header';
import Form from '../Form'
import Error from '../Error'
import Loader from '../Loader'
import Forecast from '../Forecast'
import useForcast from '../../hooks/useForcast';
const Page = () => {
    useForcast();
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
            {/* {form} */}
            <Form />
            {/* {error} */}
            {/* <Error /> */}
            {/* {Loader} */}
            {/* <Loader />      */}
            {/* {forecast} */}
            {/* <Forecast /> */}
            </div>
        </Fragment>
    );
};

export default Page;
