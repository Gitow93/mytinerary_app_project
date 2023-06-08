import homeIcon from "../images/home_icon.png";
import cityStamp from "../images/city.jpg";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../containers/cities.css";
import { addCities } from "../store/info/infoActions";
import { useDispatch, useSelector } from "react-redux";

const Cities = () => {
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.info.cities);

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5000/cities`);
    dispatch(addCities(data.data));
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
          placeholder="Where do you want to go?"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="city_list">
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
              <li className="city_file" key={city._id}>
                {city.name}
                {
                  <img
                    src={cityStamp}
                    alt={cityStamp}
                    style={{ width: "248px", height: "200px" }}
                  />
                }
              </li>
            ))}
        </ul>
      </div>
      <form>
        <h3>Do you want to add your city?</h3>
        <div className="addcity_container">
          <div>
            <label>City: </label>
            <input
              className="add_city"
              type="text"
              placeholder="ej: Barcelona"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Country: </label>
            <input
              className="add_country"
              type="text"
              placeholder="ej: Spain"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <button className="post_city" onClick={postData}>
          ADD CITY!
        </button>
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
