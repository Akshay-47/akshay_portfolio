import React, {useContext, useEffect, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const previousBodyOverflow = bodyStyle.overflow;
    const previousHtmlOverflow = htmlStyle.overflow;

    if (selectedExperience) {
      bodyStyle.overflow = "hidden";
      htmlStyle.overflow = "hidden";
    }

    return () => {
      bodyStyle.overflow = previousBodyOverflow;
      htmlStyle.overflow = previousHtmlOverflow;
    };
  }, [selectedExperience]);

  const closePanel = () => {
    setSelectedExperience(null);
  };

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <p className="experience-subheading">
                Explore each role to see the systems, outcomes, and engineering work in more detail.
              </p>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      isActive={selectedExperience?.company === card.company}
                      onSelect={() => setSelectedExperience(card)}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        hasProofLinks: card.proofLinks?.length > 0,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
        {selectedExperience && (
          <div className="experience-panel-shell" onClick={closePanel}>
            <div
              className={isDark ? "experience-panel dark-mode" : "experience-panel"}
              onClick={event => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-panel-title"
            >
              <button className="experience-panel-close" onClick={closePanel}>
                ×
              </button>
              <p className="experience-panel-kicker">{selectedExperience.company}</p>
              <h2 id="experience-panel-title" className="experience-panel-title">
                {selectedExperience.role}
              </h2>
              <p className="experience-panel-date">{selectedExperience.date}</p>
              <p className="experience-panel-summary">
                {selectedExperience.detailTitle || selectedExperience.desc}
              </p>

              {selectedExperience.impactStats?.length > 0 && (
                <div className="experience-panel-stats">
                  {selectedExperience.impactStats.map((stat, index) => (
                    <span key={index} className="experience-panel-stat">
                      {stat}
                    </span>
                  ))}
                </div>
              )}

              {selectedExperience.technologies?.length > 0 && (
                <div className="experience-panel-tags">
                  {selectedExperience.technologies.map((tech, index) => (
                    <span key={index} className="experience-panel-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {selectedExperience.proofLinks?.length > 0 && (
                <div className="experience-panel-section">
                  <h3>Live Project Links</h3>
                  <p className="experience-panel-links-copy">
                    These public links point to product journeys I contributed to and help anchor the work in real shipped experiences.
                  </p>
                  <div className="experience-panel-links">
                    {selectedExperience.proofLinks.map((link, index) => (
                      <a
                        key={index}
                        className="experience-panel-link"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {selectedExperience.detailedSections?.map((section, index) => (
                <div key={index} className="experience-panel-section">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
}
