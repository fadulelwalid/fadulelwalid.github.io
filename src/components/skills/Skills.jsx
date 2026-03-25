import React from "react";
import "./skills.css";
import Languages from "./Languages";
import Technologies from "./Technologies";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Technical Skills</h2>
            <span className="section__subtitle">Core programming languages, frameworks, and technologies</span>

            <div className="skills__container container grid">
                <Languages />
                <Technologies />
            </div>
        </section>
    )
}

export default Skills;