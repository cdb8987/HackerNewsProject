
import * as React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:'center'}}>
             <Link className="navbar-brand"to="/search">Search </Link>
             <Link className="navbar-brand" to="/history">History</Link>
        </nav>
        )
}