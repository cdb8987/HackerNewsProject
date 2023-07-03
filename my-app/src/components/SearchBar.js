import { useState } from 'react'


export default function Searchbar(props){
    const {updateSearchHistory, getSearchResults }  = props
    const [queryString, setQueryString] = useState('')

    return (
        <>
        <div >
            <div className="input-group input-group-sm mb-3" >
                <div className="input-group-prepend">
                    <span className="input-group-text">SEARCH HACKERNEWS</span>
                </div>
                <textarea className="form-control" aria-label="With textarea"  onChange={(e)=>setQueryString(e.target.value)}
                onKeyDown={(e)=>{if(e.key === 'Enter'){getSearchResults(queryString).then(updateSearchHistory(queryString)); e.target.value=''}}}></textarea>
            </div>
        </div>
        </>
    )
}