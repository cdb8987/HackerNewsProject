


export default function Searchresults(props){
    const {apiResults} = props
    if(typeof apiResults === 'undefined' || apiResults.length === 0 ){console.log('Incorrectly formatted data passed to map function'); return}
    const tableRows = apiResults.map((hit, i) => 
        <tr key={i}>
            <td> <a href={hit.url}>{hit.title}</a></td>
            <td> {hit.points}</td>
            <td> {hit.num_comments}</td>
            <td> {hit.created_at}</td>
        </tr>
        )
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Points</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )

}