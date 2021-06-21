import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from "../img/money.svg";
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'

const ServiceSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>
                    High <span> Services </span>
                </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Effiecient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="team work" />
                            <h3>Team Work</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm" />
                            <h3>Diaphragm</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Money</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={home2} alt="home 2" />
                </div>
            </div>
        </div>
    )
}

export default ServiceSection