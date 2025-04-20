import React, { useState } from "react"; //Importing tools from React - useState to manage values
import Gallery from "./components/Gallery"; //Importing the Gallery component to display the list of tours
import DestinationSelector from "./components/DestinationSelector"; //Importing the DestinationSelector component to filter the tours
import "./styles/styles.css";

//Root component of the app
function App() {
  //Global state to manage the list of tours
  const [tours, setTours] = useState([]); // Initialize tours state
  const [filteredTours, setFilteredTours] = useState([]);// Initialize filtered tours state

  //Function to remove a tour from the list
  const onRemove = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);// Filter out the tour with the given id
    setTours(updatedTours); // Update the main tours state
    setFilteredTours(updatedTours); // Update the filtered tours state
  };

  //Function to handle destination filtering
  const onDestinationChange = (destination) => {
    if (destination === "All Destinations") { // If "All Destinations" is selected
      setFilteredTours(tours); // Show all tours
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination)); // Filter tours by selected destination
    }
  };

  return (
    <main>
      <h1>Tour List</h1>
      {/* Render the DestinationSelector */}
      <DestinationSelector tours={tours} onDestinationChange={onDestinationChange} />
      {/* Pass filtered tours to the Gallery */}
      <Gallery tours={filteredTours.length ? filteredTours : tours} setTours={setTours} onRemove={onRemove} />
    </main>
  );
}

export default App;