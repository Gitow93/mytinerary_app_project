import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Itinerary = () => {
  const { id } = useParams();
  const [itinerary, setItinerary] = React.useState([]);

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5000/itinerary/${id}`);
    setItinerary(data.data);
  };

  useEffect(() => {
    fetchData();
    console.log("hola");
  }, []);

  useEffect(() => {
    console.log(itinerary);
  }, [itinerary]);

  return (
    <div>
      <h1>Itineraries</h1>
      {
        <ul>
          {itinerary?.map((itineraryInfo) => (
            <React.Fragment key={itineraryInfo._id}>
              <li>{itineraryInfo.title}</li>
              <li>{itineraryInfo.rating}</li>
            </React.Fragment>
          ))}
        </ul>
      }
    </div>
  );
};

export default Itinerary;
