

const SearchResult = ({ticker}) => {
    if(ticker === ''){
        return (
            <div />
        )
    }

    //if not a valid ticker
    if(true){
        return (
            <div>
                <p>Ticker {ticker} Not Found</p>
            </div>
        )
    }
}

export default SearchResult