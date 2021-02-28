import {Link, useLocation} from 'react-router-dom'

import '../style/style.css'

const Home = () => {


    return (
        <div class='home'>
            <h1>THAT'S BULLISH!</h1>
            {/*<p>Reddit comment stock ticker mentions tracker</p>*/}
            <Link class='homebutton' to={"/top"}>View Top Stocks {'>>'}</Link>
            <Link class='homebutton' to={"/search"}>Search Stocks by Ticker {'>>'}</Link>
            
            
        </div>
    )
}

export default Home