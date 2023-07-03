import Searchbar from "../components/SearchBar";
import Searchresults from "../components/SearchResults";

export default function Searchpage(props){
    const {getSearchResults, updateSearchHistory, apiResults} = props
    return (
        <>
            <Searchbar getSearchResults={getSearchResults} updateSearchHistory={updateSearchHistory} apiResults={apiResults}/>
            <Searchresults getSearchResults={getSearchResults} updateSearchHistory={updateSearchHistory} apiResults={apiResults}/>
        </>
    )
}