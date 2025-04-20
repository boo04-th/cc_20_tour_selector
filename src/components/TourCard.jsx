import React,{useState} from "react"; //Importing tools from React: useState to manage values

//TourCard renders individual gallery details
const TourCard = ({id, name, info, price, image, onRemove}) => {
    const [readMore, setReadMore] = useState(false); //State to manage readMore functionality

    return (
        <article className="tour-card"> 
            <img src={image} alt={name} width={600} height={600} />
            <h3>{name}</h3>
            <h5>{"$" + price}</h5>

            {/*Show full description if readMore is true*/}
            <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
            {/*Button to toggle readMore state*/}
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Read More"}
            </button>

            {/*Remove Button on Tour Card*/}
            <button className="remove-btn" onClick={() => onRemove(id)}>
                Not Interested
            </button>
        </article>
    )
}

export default TourCard; //Exporting the TourCard component so it can be used in Gallery.jsx