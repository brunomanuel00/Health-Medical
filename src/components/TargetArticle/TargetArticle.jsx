import React from "react";
import './TargetArticle.css';

export default function TargetArticle({ name, text, img, children, reverseOrder = false }) {
    return (
        <div className={`home-dot-container ${reverseOrder ? "reverse" : ""}`}>
            <div className="home-content-subcards">
                <img className="home-content-subcards-img" src={img} height="215px" width="324px" alt="doctors" />
            </div>
            <div className="home-content-subcards">
                <h3 className="home-content-h3">{name}</h3>
                <p className="home-content-text">{text}</p>
                <span>{children}</span>
            </div>
        </div>
    );
}
