

export default function Historypage(props){
    const {searchHistory} = props
    const tableRows = searchHistory.map((search, i) => 
        <tr key={i}>
            <td>{search}</td>
        </tr>
    )
    console.log(searchHistory)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">SEARCHES</th> 
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}