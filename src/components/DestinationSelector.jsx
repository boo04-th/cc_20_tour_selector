import React, { useState } from 'react';// Import React and useState

const DestinationSelector = ({ tours, onDestinationChange }) => {
    // Extract unique tour names
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))];// Create a list of unique destinations by mapping over the tours array and using Set to filter duplicates

    // State to store the selected destination
    const [selectedDestination, setSelectedDestination] = useState('All Destinations');

    // Handle dropdown change
    const handleChange = (event) => {
        const destination = event.target.value; // Get the selected destination from the event
        setSelectedDestination(destination); // Update the state with the selected destination
        onDestinationChange(destination); // Pass the selected destination up to App.jsx
    };

    return ( // Render the dropdown menu
        <div>
            <label htmlFor="destination-select">Choose a destination:</label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector; // Export the DestinationSelector component
