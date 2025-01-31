// BackgroundTop.jsx
import './BackgroundTop.css'

export default function BackgroundTop({ photo, text }) {
    return (
        <div className="background-wrapper">
            <div className="background-container">
                <img className="background-container-img" src={photo} alt="doctor with a stethoscope" />
                <div className="gradient-overlay"></div>
            </div>
            <h1 className="title-presentation">{text}</h1>
        </div>
    )
}