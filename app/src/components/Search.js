import {useState} from 'react'

import SearchResult from './SearchResult.js'

const Search = () => {
    const [ticker, setTicker] = useState("")
    const [textbox, setTextbox] = useState("")
    
    console.log(ticker)
    console.log(textbox)

    const submit = () => {
        if(textbox !== ''){
            setTicker(textbox)
        }
    }

    return (
        <div class='search'>
            <p>Search any stock by ticker</p>
            <input type='text' placeholder='CCIV' value={textbox} onChange={(e) => setTextbox(e.target.value)} />
            <button onClick={submit}>Go</button>
            <SearchResult ticker={ticker} />
        </div>
    )
}

export default Search