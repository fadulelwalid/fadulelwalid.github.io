import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            {/*
            <a 
            href="https://www.instagram.com/elwalidfadul" 
            className="home__social-icon" 
            target="_blank"
            rel="noopener noreferrer">
                <i class="uil uil-instagram"></i>
            </a> 
            */}
            
            <a 
            href="https://www.linkedin.com/in/fadul-fadul/" 
            className="home__social-icon" 
            target="_blank"
            rel="noopener noreferrer">
                <i class="uil uil-linkedin"></i>
            </a>

            <a 
            href="https://github.com/fadulelwalid" 
            className="home__social-icon" 
            target="_blank"
            rel="noopener noreferrer">
                <i class="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;