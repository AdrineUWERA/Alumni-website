import React from 'react';
import get_involved_style from './GetInvolved.scss';
import WGI_dummy from '../../asstes/WGI_dummy.mp4';

export const GetInvolved = () => {
    return (
        <div className="get-involved">
            <div className="get-involved-left">
                <h1>WHY GET INVOLVED WITH US</h1>
                <p>Get to know how you can get involved with the ALUmni association and the ALU community at large</p>
                <button>Get Involved</button>

            </div>

            <div className="get-involved-right">
                <video controls>
                    <source src= {WGI_dummy} type="video/mp4"></source>
                </video>
            </div>
            
        
        </div>
    )
}


export default GetInvolved;