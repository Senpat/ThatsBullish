import {Link, useLocation} from 'react-router-dom'

import '../style/Headerstyle.css'

const Headerbutton = ({link,text}) => {
    const location = useLocation()

    return (
        <>
            <Link to={link} class={(location.pathname === link || (location.pathname === "/" && link === Headerbutton.defaultProps.link)) ? 'active' : ''}>{text}</Link>
        </>
    )
}

Headerbutton.defaultProps = {
    link: "/home",
    text: "Home"
}

export default Headerbutton