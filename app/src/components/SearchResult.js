import firebase from 'firebase'

//import {alltickers,tickerssorted,rankings} from './stocks.js'



const SearchResult = ({ticker}) => {
    if(ticker === ''){
        return (
            <div />
        )
    }

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
    console.log(alltickers)
    const common = new Set(["PE","EV","DD","RH","CEO","UK","FOR","IMO","LMAO","AI","IT","ALL","ON","ARE","DO","HUGE","LIFE","TIL","RUN","TV"])


    ticker=ticker.toUpperCase().trim()
    
    if(ticker.trim() in alltickers){
        return (
            <div>
                <p>Ticker ${ticker}:</p>
                <p>{alltickers[ticker]} recent mentions</p>
                <p>Rank #{rankings[ticker]}</p>
                {common.has(ticker) && (
                    <p>*May be inflated due to ticker's proximity to common speech</p>
                )}
            </div>
        )
    } else {                            //if not a valid ticker
        return (
            <div>
                <p>Ticker ${ticker} Not Found</p>
            </div>
        )
    }
}

export default SearchResult