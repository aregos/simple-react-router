import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <Link to="/">
                Logo
                </Link>
            </div>
            <div className="col-md-3">
                <Link to="/news">
                    News
                </Link>
            </div>
            <div className="col-md-3">
                <Link to="/profile">
                    Login
                </Link>
            </div>
        </div>
    </div>
)

export default Header