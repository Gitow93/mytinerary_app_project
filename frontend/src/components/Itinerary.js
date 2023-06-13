import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Itinerary = () => {
  const { id } = useParams();

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5000/itinerary/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Itineraries</h1>
    </div>
  );
};

export default Itinerary;
