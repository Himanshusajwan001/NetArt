import React from 'react';
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Fontawesome from '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js'
function Footer() {
    var toll_free_number = 18002001234;
    var facebook_link = "www.facebook.com/cripumps";
    var website = "www.crigourps.com";
    return (
        <div class="footer">
            <div id="toll__free" >
            <i class="fas fa-phone-alt"></i>
                Toll free {toll_free_number}
            </div>
            <div id="facebook">
            <i class="fab fa-facebook"></i>
                {facebook_link}
            </div>
            <div id="website">
            <i class="fas fa-globe"></i>
                {website}
            </div>
        </div>
    )
}

export default Footer;
