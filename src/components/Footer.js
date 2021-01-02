import React from 'react';
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Fontawesome from '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js'
function Footer() {
    // var toll_free_number = 18002001234;
    // var facebook_link = "";
    // var website = "";
    return (
        <div class="footer">
            <div id="toll__free" >
            <i class="fas fa-phone-alt"></i>
                <p class="footer__p">Toll free 18002001234</p>
            </div>
            <div id="facebook">
                <i class="fab fa-facebook"></i>
                <p class="footer__p">www.facebook.com/cripumps</p>
            </div>
            <div id="website">
            <i class="fas fa-globe"></i>
            <p class="footer__p">www.crigourps.com</p>
            </div>
        </div>
    )
}

export default Footer;
