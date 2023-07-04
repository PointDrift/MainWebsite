import React from 'react';
import logo from "../LI-In-Bug.png";

function About() {
    return (
        <div>
            <h1>
                Our Team: <br/>
                Pranav D, Vikas M, Sean Y <br/>
                powered by the Georgia Institute of Technology
            </h1>
            <div className="socialTab">
                <text className="textDesc">
                    Connect with us on:
                </text>
                <a href="https://www.linkedin.com/company/98177183" target="_blank">
                    <img src={logo} style={{width: "75px", padding: "10px"}}/>
                </a>
            </div>
        </div>
    );
}

export default About;
