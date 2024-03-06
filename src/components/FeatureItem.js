import React from "react"

function FeatureItem({image, iconTitle, title, text}) {
  return (
    <div className="feature-item">
      <img src={image} alt={iconTitle} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem