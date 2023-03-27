import { AiFillStar } from "react-icons/ai";

const DefaultStar = () => {
    const defaultStyle = {
        color: '#777'
    }

    return (
        <p style={defaultStyle}>
            <AiFillStar />
        </p>
    )
}

export default DefaultStar;