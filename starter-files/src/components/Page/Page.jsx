import React, { Fragment } from 'react';
import styles from './Page.module.css'
import Header from '../Header';
import Form from '../Form'
import Error from '../Error'
import Loader from '../Loader'
import Forecast from '../Forecast'
import useForcast from '../../hooks/useForcast';
const Page = () => {
    const {isError, isLoading, forecast, submitRequest}=useForcast();

    const onSubmit = (value) => {
        submitRequest(value)
    }
    return (
        <Fragment>
            <Header />
            {!forecast && (
            <div className={`${styles.box} position-relative`}>
            {/* {form} */}
            {!isLoading && <Form submitSearch= {onSubmit}/>}
            {/* {error} */}
            {isError && <Error message={isError} />}
            {/* {Loader} */}
            {isLoading && <Loader/>}
            </div>
            )}
            {/* {forecast} */}
            {forecast && <Forecast forecast ={forecast} />}
        </Fragment>
    );
};

export default Page;
