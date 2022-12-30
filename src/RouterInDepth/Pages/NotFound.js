import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='text-center'>
            <h2 className='display-1 text-danger'>404</h2>
            <h4>Page NotFound</h4>
            <p>Goto <Link to="/">Home</Link> Page</p>
        </section>
    )
}

export default NotFound;