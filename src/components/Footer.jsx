import React from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {far} from "@fortawesome/free-regular-svg-icons";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

library.add(far, faCopyright);

function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    
    return <footer>
        Copyright <FontAwesomeIcon icon={["far", "copyright"]} /> {year}
    </footer>
}

export default Footer;