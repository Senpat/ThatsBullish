import {Link, useLocation} from 'react-router-dom'

import Headerbutton from './Headerbutton.js'

import '../style/Headerstyle.css'

const Header = () => {

    return (
        <div class="navbar">
            <Headerbutton link="/home" text="Home" />
            <Headerbutton link="/top" text="Top" />
            <Headerbutton link="/search" text="Search" /> 
        </div>
        
    )
}


export default Header