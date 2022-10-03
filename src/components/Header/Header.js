import React from 'react';
import classes from './Header.module.scss';
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'


export const Header = (props) => {
    return (
        <header>
            <aside>
                <div className={classes.spacer}></div>
                <div className={classes.aside__content}>
                    <div>
                        <h1>ALU Alumni</h1>
                    </div>
                    <div>
                        <a href="/login"><p>Sign in</p></a>
                    </div>
                    <a href="/involved"><button>Get Involved</button></a>
                </div>
            </aside>
            <section className={classes.background_cover}>
                <nav className="container">
                    <h1>ALU Alumni</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/programs">Programs</a></li>
                        <li><a href="/blogs">Blog</a></li>
                        <li><a href="/news">News &amp; Event</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;