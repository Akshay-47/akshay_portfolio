import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {interestSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Interest.scss";

export default function Interest() {
  const {isDark} = useContext(StyleContext);

  if (!interestSection.display) {
    return null;
  }

  return (
    <div className="main" id="interests">
      <Fade bottom duration={1000} distance="20px">
        <section className={isDark ? "interest-section dark-mode" : "interest-section"}>
          <div className="interest-shell">
            <h1 className="interest-title">
              {interestSection.titleIcon && (
                <span className="interest-title-icon">
                  <i className={interestSection.titleIcon}></i>
                </span>
              )}
              {interestSection.title}
            </h1>
            <div className="interest-badge-row">
              <span className="interest-badge-icon">
                <i className={interestSection.badgeIcon || "fas fa-arrow-trend-up"}></i>
              </span>
              <span className="interest-badge-text">{interestSection.badge}</span>
            </div>

            <div className="interest-copy">
              {interestSection.paragraphs.map((item, index) => (
                <p key={index}>
                  {item.icon && (
                    <span className="interest-paragraph-icon">
                      <i className={item.icon}></i>
                    </span>
                  )}
                  {item.text}
                </p>
              ))}
            </div>

            <div className="interest-highlights">
              {interestSection.highlights.map((item, index) => (
                <div key={index} className="interest-highlight-card">
                  <div className="interest-highlight-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
