import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-dark bg-primary text-center">
                <div className="container-fluid text-center">
                    <label className="navbar-brand text-bold text-center mx-3">Product Management</label>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" to="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/addproduct">Add User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
