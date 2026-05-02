import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark, isActive, onSelect}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    if (!imgRef.current) {
      return;
    }
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <button
      type="button"
      className={`${isDark ? "experience-card-dark" : "experience-card"} ${
        isActive ? "experience-card-active" : ""
      }`}
      onClick={onSelect}
    >
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        {cardInfo.companylogo && (
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        )}
      </div>
      <div className="experience-text-details">
        <span className={isDark ? "experience-card-company-tag dark-mode-text" : "experience-card-company-tag"}>
          {cardInfo.company}
        </span>
        {cardInfo.hasProofLinks && (
          <span className={isDark ? "experience-card-link-hint dark-mode-text" : "experience-card-link-hint"}>
            Live project links available
          </span>
        )}
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc experience-text-desc-clamped dark-mode-text"
              : "subTitle experience-text-desc experience-text-desc-clamped"
          }
        >
          {cardInfo.desc}
        </p>
        <span
          className={
            isDark
              ? "experience-card-cta dark-mode-text"
              : "experience-card-cta"
          }
        >
          View detailed work...
        </span>
      </div>
    </button>
  );
}
