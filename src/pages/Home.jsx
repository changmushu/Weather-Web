import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import d01 from '../assets/images/weather_icons/01d.png'
import n01 from '../assets/images/weather_icons/01n.png'
import direction from '../assets/images/weather_icons/direction.png'
import openweather from '../assets/images/openweather.png'
import { handleClick } from '../js/app'


const Home = () => {


    return (
        <>

            <header className='header'>
                <div className="container">
                    <a href="/#" className='logo'>
                        <img src={logo} style={{ width: '364px', height: '58px' }} alt="logo" />
                    </a>

                    <div className="search-view" data-search-view>
                        <div className="search-wrapper">
                            <input type="search" name='search' placeholder='search city...' autoComplete='off' className='search-field' data-search-filed />
                            <span className="m-icon leading-icon">search</span>
                            <button className="icon-btn leading-icon has-state" aria-label="close search" data-search-toggler>
                                <span className='m-icon'>arrow_back</span>
                            </button>
                        </div>
                        <div className="search-result" data-search-result></div>
                    </div>

                    <div className="header-actions">
                        <button className="icon-btn has-state" aria-label='open search' data-search-toggler>
                            <span className='m-icon icon'>search</span>
                        </button>
                        <a href="/#/current-location" className='btn-primary has-state' data-current-location-btn>
                            <span className='m-icon'>my_location</span>

                            <span className='span'>Current Location</span>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <article className='container' data-container>
                    <div className="content-left">
                        <section className="section current-weather" aria-label='current weather' data-current-weather></section>

                        <section className="section forecast" aria-labelledby='forecast-label' data-5-day-forecast></section>
                    </div>

                    <div className="content-right">

                        <section className="section highlights" aria-labelledby='highlights-label' data-highlights></section>

                        <section className="section hourly-forecast" aria-label='hourly forecast' data-hourly-forecast></section>

                        <footer className='footer'>
                            <p className="body-3">
                                Copyright 2023, All Rights Reserved.
                            </p>

                            <p className="body-3">
                                Powered By <a href="https://openweathermap.org/api" title='Free OpenWeather Api' target={'_blank'} rel="noopener">
                                    <img src={openweather} style={{ width: '150px', height: '30px', loading: 'lazy' }} alt="OpenWeather" />
                                </a>
                            </p>
                        </footer>
                    </div>

                    <div className="loading" data-loading>

                    </div>

                </article>
            </main>

            <section className="error-content" data-error-content>
                <h2 className="heading">404</h2>

                <p className="body-1">Page not found!</p>

                <a href="#/weather?lat=45.80882&lon=126.54162" className="btn-primary">
                    <span className="span">Go Home</span>
                </a>
            </section>

        </>
    )
}

export default Home