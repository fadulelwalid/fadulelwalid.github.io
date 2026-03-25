import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                {/*<i class="bx bx-award about__icon"></i>*/}
                <i class="bx bx-book about__icon"></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">M.Sc. Computer Science</span>
            </div>

            <div className="about__box">
                <i class="bx bx-brain about__icon"></i>
                <h3 className="about__title">Interests</h3>
                <span className="about__subtitle">Web, Cloud & AI</span>
            </div>

            <div className="about__box">
                <i class="bx bx-user-check about__icon"></i>
                <h3 className="about__title">Availability</h3>
                <span className="about__subtitle">Open to Opportunities</span>
            </div>
        </div>
    )
}

export default Info;