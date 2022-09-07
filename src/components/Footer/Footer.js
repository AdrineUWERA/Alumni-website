import React from 'react'
import footer_style from './Footer.module.scss';


export const Footer = (props) => {
    return (
        <footer className={footer_style.footer}>
            <section className="container">
                <div className={footer_style.footer__content}>
                    <div className={footer_style.footer__inner_text}>
                        <h2>ALU Alumni</h2>
                        <li><a href="/">Join Alumni Community</a></li>
                        <li><a href="/">Join Alumni Community</a></li>
                        <li><a href="/">Donate</a></li>

                        <div className={footer_style.contact__section}>
                            <h3>Contact Us</h3>
                            <p>We’d love to have you reach out to us and would value your interactions with our accomplished alumni</p>
                        </div>
                    </div>

                    <div className={footer_style.footer__input}>
                        <input className={footer_style.input} placeholder="Enter your fullname" type="text"></input>
                        <input placeholder="Enter your email" type="text"></input>
                        <textarea placeholder="Enter your messsage" type="text"></textarea>
                        <button>Subscribe</button>
                    </div>
                </div>

                <p className={footer_style.trade_mark}>® 2022 African Leadership University Alumni. All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer;