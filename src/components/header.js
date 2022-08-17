import React from "react";
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <>

        <header className="py-2 text-bg-dark border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <div className="site-logo">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src={require('../images/favicon.png')} alt="gfgf" width="50"/>
                        </a>
                    </div>

                    <div className="main-nav ms-5">
                        <ul className="nav col-12 col-lg-auto my-2  justify-content-center my-md-0 text-small">
                            <li>
                                <Link to="/" className="nav-link text-secondary">
                                    <img src={require('../images/home.png')} className="bi d-block mx-auto mb-1" width="24" height="24" alt="" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="nav-link px-3 text-white">
                                    <img src={require('../images/calender.png')} className="bi d-block mx-auto mb-1" width="24" height="24" alt="" />
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="nav-link px-3 text-white">
                                    <img src={require('../images/4boxes.png')} className="bi d-block mx-auto mb-1" width="24" height="24" alt="" />
                                    cart
                                </Link>
                            </li>
                            <li>
                                <a href="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline" className="nav-link px-3 text-white">
                                    <img src={require('../images/meter.png')} className="bi d-block mx-auto mb-1" width="24" height="24" alt="" />
                                    Blogs
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="ms-auto d-flex  align-items-center justify-content-center">
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="dropdown text-end">
                            <a href="/#" className="d-block text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" >
                                <li><a className="dropdown-item" href="/#">Wishlist</a></li>
                                <li><a className="dropdown-item" href="/#">Settings</a></li>
                                <li><a className="dropdown-item" href="/#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}