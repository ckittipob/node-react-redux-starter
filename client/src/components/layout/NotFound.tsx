import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="app-container">
            <div className="home-container">
                <div className="home-content">
                    <h2><i className="fas fa-search fa-3x"></i></h2>
                    <Link to = "/" className="btn-main">NOT FOUND</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
