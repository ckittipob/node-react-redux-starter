import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="app-container">
            <div className="home-container">
                <div className="home-content">
                    <h2><i className="fas fa-clipboard-list fa-3x"></i></h2>
                    <Link to = "/examples" className="btn-main">VIEW EXAMPLES</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
