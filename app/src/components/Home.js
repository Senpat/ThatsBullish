import {Link, useLocation} from 'react-router-dom'

const Home = () => {


    return (
        <div>
            <h1>THAT'S BULLISH!</h1>
            <div class='homebuttons'>
                <Link to={"/top"}>View Top Stocks</Link>
                <Link to={"/search"}>Search Stocks by Ticker</Link>
            </div>
            
        </div>
    )
}

export default Home