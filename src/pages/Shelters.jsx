import { useNavigate } from "react-router-dom";

import "../css/Shelters.css";

const Shelters = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <section>
      <div className="shelter-title">
        <h1>Our Shelter Statistics</h1>
        <p>
          We are committed to providing the best care for our animals and
          ensuring they find loving homes.
        </p>
      </div>
      <div className="stats-row">
        <div className="stat">
          <img src="images/animal-shelter2.png"></img>
          <p className="stat-num">146</p>
          <p className="stat-text">Animals Housed</p>
        </div>
        <div className="stat">
          <img src="images/friends.png"></img>
          <p className="stat-num">32</p>
          <p className="stat-text">Volunteers</p>
        </div>
        <div className="stat">
          <img src="images/location.png"></img>
          <p className="stat-num">3</p>
          <p className="stat-text">Shelter Locations</p>
        </div>
        <div className="stat">
          <img src="images/kitten.png"></img>
          <p className="stat-num">94</p>
          <p className="stat-text">Animals Adopted</p>
        </div>
      </div>
      <a href="#" onClick={handleButtonClick}>
        Go Back
      </a>
    </section>
  );
};

export default Shelters;
