import LightStar from "../../../../common/components/StarRating/LightStar/LightStar";
import DefaultStar from "../../../../common/components/StarRating/DefaultStar/DefaultStar";

const Rating = ({rated}) => {
    let i = 0;
    let stars = [];
    while(i < 5) {
        if(i < rated) {
            stars.push(<LightStar />)
        } else {
            stars.push(<DefaultStar />)
        }
        i++;
    }

    return (
        <>
            {stars}
        </>
    )
}

export default Rating;