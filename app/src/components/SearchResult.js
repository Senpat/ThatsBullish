import {alltickers,tickerssorted,rankings} from './stocks.js'

const SearchResult = ({ticker}) => {
    if(ticker === ''){
        return (
            <div />
        )
    }

    //if not a valid ticker
    if(ticker.toUpperCase().trim() in alltickers){
        return (
            <div>
                <p>Ticker ${ticker}:</p>
                <p>{alltickers[ticker]} mentions</p>
                <p>Rank {rankings[ticker]}</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Ticker {ticker} Not Found</p>
            </div>
        )
    }
}

export default SearchResult