import './DescriptionBlock.css'

export default function DescriptionBlock({ title, text = null }) {

    return (
        <div className="description-container">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )

}
