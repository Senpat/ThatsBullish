import {useState} from 'react'

const Search = () => {
    const [textbox, setTextbox] = useState("")

    return (
        <div>
            <p>Search any stock by ticker</p>
            <form>
                <input type='text' placeholder='CCIV' value={textbox} onChange={(e) => setTextbox(e.target.value)} />
            </form>
        </div>
    )
}

export default Search