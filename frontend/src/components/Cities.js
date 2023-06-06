import homeIcon from "../images/home_icon.png";
import searchIcon from "../images/search_icon.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cities = () => {
  const [query, setQuery] = React.useState("");
  const [cities, setCities] = React.useState([]);

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5000/cities`);
    console.log(data);
    setCities(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [name, setName] = React.useState("");
  const [country, setCountry] = React.useState("");

  const postData = async () => {
    try {
      await axios.post(`http://localhost:5000/cities`, {
        name: name,
        country: country,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <h1>Cities</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {cities
            .filter((city) => {
              const queryLowerCase = query.toLowerCase();
              const cityName = city.name.toLowerCase();
              return cityName.startsWith(queryLowerCase);
            })
            .sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((city) => (
              <li key={city._id}>{city.name}</li>
            ))}
        </ul>
      </div>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />
        <button onClick={postData}>POST</button>
      </form>
      <footer>
        <Link to="/">
          <img
            src={homeIcon}
            alt={homeIcon}
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </footer>
    </>
  );
};

export default Cities;
