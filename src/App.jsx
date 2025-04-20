import React, { useState } from 'react'; //Importing tools from React - useState to manage values
import Gallery from './components/Gallery'; //Importing the Gallery component to display the list of tours
import './styles/styles.css'; //Importing the CSS file for styling the app

//Root componnent of the app
function App() {
  //Gobal state to hold the list of tours   
  const [tours, setTours] = useState([]);

  //Function to remove a tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours); // Update the tours list by keeping only the tours that don't match the given ID
  };

  return (
    <main>
      <h1>Our Tours Explorer</h1>
      {/*Pass the list of tours and the removeTour function as props to Gallery component*/}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;
// export default App