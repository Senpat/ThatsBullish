import {BrowserRouter, Route} from 'react-router-dom'

import Home from './Home.js'
import Top from './Top.js'
import Search from './Search.js'

const Body = () => {

    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/top" component={Top} />
            <Route path="/search" component={Search} />
        </div>
    )
    
    
}

export default Body