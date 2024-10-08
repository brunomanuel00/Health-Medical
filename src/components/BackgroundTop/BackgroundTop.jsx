import './BackgroundTop.css'

export default function BackgroundTop({ photo, text }) {

    return (
        <>
            <div className='gradient-presentation'></div>
            <div className='background-container'>
                <img className='background-container-img' src={photo} alt="doctor wiht a tetoscope" />
            </div>
            <h1 className='title-presentation'>{text}</h1>
        </>
    )

};
