import React from 'react';
import {useState, useEffect} from 'react';
import UpcomingEventsStyles from "./UpcomingEvents.scss";


export const UpcomingEvents = () => {
    return (
        <div className='upcoming-events place-content-center m-auto text-center'>
            <h1 className='section-title text-blue-800 font-bold text-center'>UPCOMING EVENTS</h1>
            <div className="events flex items-center"> 
                <div className='event-1'>
                    <div className='date'>
                        <h1 className='uppercase font-semibold' >Jan 24</h1>
                    </div>
                    <div className='event-details'>
                        <p className='title'>GOOD READ THURSDAY</p>
                        <p className='organisation'>ALU Campus Life</p>
                    </div>
                </div>
                <div className='event-2 flex'>
                    <div className='date'>
                        <h1 className='font-semibold'>July 4</h1>
                    </div>
                    <div className='event-details'>
                        <p className='title'>IKAZE</p>
                        <p className='organisation'>ALU SRC</p>
                    </div>
                </div>  
                <div className='event-1'>
                    <div className='date'>
                        <h1 className='uppercase font-semibold' >Jan 24</h1>
                    </div>
                    <div className='event-details'>
                        <p className='title'>GOOD READ THURSDAY</p>
                        <p className='organisation'>ALU Campus Life</p>
                    </div>
                </div>  
                <div className='event-2 flex'>
                    <div className='date'>
                        <h1 className='font-semibold'>July 4</h1>
                    </div>
                    <div className='event-details'>
                        <p className='title'>IKAZE</p>
                        <p className='organisation'>ALU SRC</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default UpcomingEvents;
