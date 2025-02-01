import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";

const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating);
    const fullStars = roundedRating;

    return (
        <div>
            {[...Array(fullStars)].map((_, i) => (
                <img key={i} src={fullStar} alt="star" width="20" />
            ))}
            {[...Array(5 - fullStars)].map((_, i) => (
                <img key={i} src={emptyStar} alt="empty star" width="20" />
            ))}
        </div>
    );
};

export default StarRating;
