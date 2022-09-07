import React from 'react'
import classes from './Header.module.scss'


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
                        <p>Sign in</p>
                    </div>
                    <button>Get Involved</button>
                </div>
            </aside>
            <section className={classes.background_cover}>
                <nav className="container">
                    <h1>ALU Alumni</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/programs">Programs</a></li>
                        <li><a href="/programs">Blog</a></li>
                        <li><a href="/programs">News & Event</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;