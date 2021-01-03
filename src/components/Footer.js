import React from 'react';
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Fontawesome from '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js'
function Footer() {

    return (
        <div class="footer">
            <div id="toll__free" >
            <i class="fas fa-phone-alt"></i>
            <p class="footer__p">Toll free 18002001234</p>
            </div>
            <div id="facebook">
                <i class="fab fa-facebook"></i>
                <a href="www.facebook.com/cripumps" id="fb__link" class="footer__p">www.facebook.com/cripumps</a>
            </div>
            <div id="website">
            <i class="fas fa-globe"></i>
            <a href="www.crigourps.com"  class="footer__p" id ="site__link">www.crigourps.com</a>
            </div>
        </div>
    )
}

export default Footer;
