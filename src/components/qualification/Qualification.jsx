import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Journey</h2>
            <span className="section__subtitle">Academic milestones and professional journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {/* Education Button*/}
                    {/* 
                    <div 
                        className={
                            toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        } 
                        onClick={() => toggleTab(1)}
                    >
                        <i className="ui uil-graduation-cap qualifications__icon"></i>Education
                    </div>
                    */}
                    <button
                        className={`qualification__button button--flex ${
                            toggleState === 1 ? "qualification__active" : ""
                        }`}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="ui uil-graduation-cap qualifications__icon"></i>
                        Education
                    </button>

                    {/* Experience Button */}
                    {/* 
                    <div 
                        className={
                            toggleState === 2 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="ui uil-briefcase-alt qualifications__icon"></i>Experience
                    </div>
                    */}
                    <button
                        className={`qualification__button button--flex ${
                            toggleState === 2 ? "qualification__active" : ""
                        }`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="ui uil-briefcase-alt qualifications__icon"></i>
                        Experience
                    </button>
                </div>

                <div className="qualification__sections">
                    {/* Education Content */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MSc in Computer Science</h3>
                                <span className="qualification__subtitle">University of Stavanger</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bachelor of Engineering</h3>
                                <span className="qualification__subtitle">University of Stavanger</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2023
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Experience Content */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Coding Instructor</h3>
                                <span className="qualification__subtitle">Young Coderz AS</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;
