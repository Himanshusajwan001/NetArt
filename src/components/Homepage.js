import React from 'react'
import photo1 from '../Images/1.png';
import photo2 from '../Images/2.png';
import logo from '../Images/logo.png';
import './Homepage.css'

function Homepage() {
    return (
        <>
            <div className="homepage__container">
                <img src={photo1} id="photo1" alt="National Energy Conservation Award"></img>
                <div className="info">
                    <img id = "logo" src={logo} alt="logo"></img>
                    <h4 class="homepage__h"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                        <ul >
                            <li class="homepage__li"> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li class="homepage__li"> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                    <figure>
                        <img id="photo2" src={photo2} alt="Award from Government of India"></img>
                        <figcaption class="homepage__caption">
                            Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
        )
}

export default Homepage
