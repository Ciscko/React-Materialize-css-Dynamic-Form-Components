import React, { createRef, useEffect } from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom'

const Navbar = ({ content, options, navclass }) => {
    const sidenavRef = createRef()
    useEffect(() => {
        M.Sidenav.init(sidenavRef.current, options)
    }, [])
    return (
        <>
            <div className="navbar-fixed" style={{ 'marginBottom': '1px' }}>
                <nav className={navclass}>
                    <div className="nav-wrapper">
                        <ul>
                            <li className="orange-text">
                               <h5 style={{ 'marginLeft': '10px' }} >{content.logo}</h5> 
                            </li>
                        </ul>

                        <a href="#" data-target="mobile-demo" className="right sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {
                                content.items.map((item, index) => {
                                    return <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav light-blue darken-4" ref={sidenavRef} id="mobile-demo">
                <li className="">
                    <img className="responsive-img" style={{ 'height': '100%', 'padding': '0px' }} alt="Logo" src={content.logo} />
                </li>
                {
                    content.items.map((item, index) => {
                        return (
                            <li key={index}><Link className="white-text" to={item.link}>{item.title}</Link></li>
                        )
                    })
                }
                <li className=""></li>
            </ul>
        </>
    );
}

export default Navbar
