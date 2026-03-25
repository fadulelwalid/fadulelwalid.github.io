import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Selected Projects</h2>
            <span className="section__subtitle">Highlighted open-source work and personal initiatives from my GitHub</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-robot services__icon"></i>
                        <h3 className="services__title">
                            AI Manuscript <br /> & Quiz Generator
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">AI Manuscript & Quiz Generator</h3>
                            <p className="services__modal-description">
                                Exploring the application of LLMs in optimizing industrial training material development
                                in the oil and gas industry.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Converts operational documents into structured e-learning manuscripts.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Auto-generates MCQs from manuscript.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Modular pipeline for separate manuscript/MCQ stages.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Uses RAG-enhanced LLMs with prompt engineering for accuracy/consistency.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Compares HF models to select optimal performer; fully local for data compliance.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Evaluated with automated metrics and human expert assessments.
                                    </p>
                                </li>
                            </ul>

                            <div className="services__modal-footer" style={{ marginTop: "1.5rem", textAlign: "center" }}>
                                <a 
                                    href="https://github.com/fadulelwalid/DATMAS-2025.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button button--flex"
                                >
                                    View on GitHub 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-eye services__icon"></i>
                        <h3 className="services__title">
                            Interpretable <br /> Sports CNN
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">Interpretable Sports CNN</h3>
                                <p className="services__modal-description">
                                    DL project focused on classifying sports images using CNNs, with an emphasis on model interpretability.
                                </p>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            100-class sports image classification.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Custom CNN (~6.7M parameters).  
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Transfer learning with VGG16.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Data augmentation for class imbalance.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Grad-CAM and Saliency Maps for interpretability.
                                        </p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">
                                            Performance evaluation (accuracy & loss).
                                        </p>
                                    </li>
                                </ul>

                                <div className="services__modal-footer" style={{ marginTop: "1.5rem", textAlign: "center" }}>
                                    <a 
                                        href="https://github.com/fadulelwalid/sports-classification-cnn-interpretability.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button button--flex"
                                    >
                                        View on GitHub 
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-sitemap services__icon"></i>
                        <h3 className="services__title">
                            PersonaNet - <br /> Family Tree
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">PersonaNet - Family Tree</h3>
                            <p className="services__modal-description">
                                Web application for visualizing and exploring family relationships.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Interactive family graph visualization.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Full CRUD operations to add, edit, view, and delete people.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Search functionality and listing of all people stored in PostgreSQL with EF Core.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Trace relationships between any two people using BFS algorithm.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Unit tests to ensure reliability and maintainability of core graph and data operations.
                                    </p>
                                </li>
                            </ul>

                            <div className="services__modal-footer" style={{ marginTop: "1.5rem", textAlign: "center" }}>
                                <a 
                                    href="https://github.com/fadulelwalid/people-graph.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button button--flex"
                                >
                                    View on GitHub 
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;