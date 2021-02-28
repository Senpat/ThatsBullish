import {useState} from 'react'
import firebase from './firebase.js'

//import {alltickers,tickerssorted,rankings} from './stocks.js'
import '../style/style.css'

const Top = () => {
    const INC = 10
    const [shownum,setShownum] = useState(INC)

    let alltickers = {}
    let rankings = {}

    const ref = firebase.database().ref('stockpraw4')
    ref.on('value',(snapshot) => {
        alltickers = snapshot.val()
    })

    const tickerssorted = Object.keys(alltickers).sort((a,b) => {return alltickers[b]-alltickers[a]})

    for(let k = 0; k < tickerssorted.length; k++){
        rankings[tickerssorted[k]] = k+1
    }

    const common = new Set(["DD","RH","CEO","UK","FOR","IMO","LMAO","AI","IT","ALL","ON","ARE","DO","HUGE","LIFE","TIL","RUN","TV"])

    const showtickers = []
    let i = 0
    while(i < tickerssorted.length && showtickers.length < shownum){
        if(!common.has(tickerssorted[i])){
            showtickers.push(tickerssorted[i])
        }
        i++
    }
    console.log(alltickers)
    //console.log(showtickers)

    return (
        <div class='top'>
            <p>Top Mentioned Stocks:</p>
            {showtickers.map((ticker,index) => (
                <p>{index+1}. {ticker}{"\t\t"}{alltickers[ticker]}</p>
            ))}
            <button onClick={() => setShownum(shownum+INC)}>Show More</button>
        </div>
    )
}

export default Top