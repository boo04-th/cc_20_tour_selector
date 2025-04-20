import React, { useEffect, useState } from "react"; ////Importing the Gallery component to display the list of tours
import TourCard from "./TourCard"; //Importing the TourCard component to display each tour

const Gallery = ({ tours, setTours, onRemove }) => { //Importing the Gallery component to display the list of tours
    const [loading, setLoading] = useState(true); //State to manage loading state
    const [error, setError] = useState(false); //State to manage error state

    const fetchTours = async () => { //Fetching the tours from the API
        try {
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"); //Fetching the tours from the API
            const data = await response.json(); // Parse the JSON response

                // You don't need `.results` for this API, just `data`
                const trimmed = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image,
            }));

            setTours(trimmed);// Save data to global state
            setLoading(false); // Set loading to false
        } catch (error) {
            setError(true); // If fetch fails, show error
            setLoading(false); // Set loading to false
        }
    };

    // Run fetchTours once after the component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    // Render loading state
     if (loading) {
        return <h2>Loading...</h2>;
    }
    // Render error state
    if (error) {
        return <h2>Error fetching tours...</h2>;
    }

    // Render if no tours remain
    if (tours.length === 0) {
        return (
            <div>
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    }

    // Render the list of TourCards
    return (
        <div>
            <section className="gallery">
                {tours.map((tour) => (
                    <TourCard 
                    key={tour.id} 
                    {...tour} // Spread operator to pass all tour properties
                    onRemove={onRemove} /> // Pass onRemove function to TourCard
                ))}
            </section>
        </div>
    );
};

export default Gallery; //Exporting the Gallery component so it can be used in other files like App.jsx