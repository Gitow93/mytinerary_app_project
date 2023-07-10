import React from "react";
import axios from "axios";

const AddCity = () => {
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
      {" "}
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
    </>
  );
};

export default AddCity;
