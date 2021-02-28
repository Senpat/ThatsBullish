
import firebase from './firebase.js'

import {alltickers,tickerssorted,rankings} from './stocks.js'
import '../style/style.css'

const Top = () => {
    /*
    let alltickers = {}

    const ref = firebase.database().ref('stockpraw4')
    ref.on('value',(snapshot) => {
        alltickers = snapshot.val()
    })
    */
   /*
    const tickerssorted = Object.keys(alltickers).sort((a,b) => {return alltickers[b]-alltickers[a]})
    */
    const showtickers = []
    for(let k = 0; k < 30; k++){
        showtickers.push(tickerssorted[k]);
    }
    console.log(alltickers)
    //console.log(showtickers)

    return (
        <div class='top'>
            <p>Top Mentioned Stocks:</p>
            {showtickers.map((ticker) => (
                <p>{ticker}{"\t\t"}{alltickers[ticker]}</p>
            ))}
        </div>
    )
}

export default Top