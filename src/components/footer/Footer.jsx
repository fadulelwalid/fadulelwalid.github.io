import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                {/*<h1 className="footer__title">Fadul</h1>*/}

                <ul className="footer__list">
                    <li>
                        <a href="#about" 
                        className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" 
                        className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" 
                        className="footer__link">Journey</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                    href="https://www.facebook.com/" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noopener noreferrer">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    
                    <a 
                    href="https://www.instagram.com/" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noopener noreferrer">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a 
                    href="https://www.twitter.com/" 
                    className="footer__social-link" 
                    target="_blank"
                    rel="noopener noreferrer">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; 2026 F.E.F
                </span>
            </div>
        </footer>
    )
}

export default Footer