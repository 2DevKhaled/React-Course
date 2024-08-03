
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating maxRating={5} />
    <StarRating
      maxRating={10}
      messages={["Terable", "Bad", "Okay", "Good", "Amazing"]}defaultRating={7}
    />
    <StarRating
      size="24"
      color="red"
      className="test"
      messages={["Terable", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
function Test(){
  const [movieRating ,setMovieRating] = useState (0); 
  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating}/>
      <p>This Movie was rated {movieRating} Stars</p>
    </div>

  )
}
