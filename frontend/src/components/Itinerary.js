import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import cityStamp from "../images/city.jpg";
import "../containers/itinerary.css";

const Itinerary = () => {
  const { city } = useParams();
  const [itinerary, setItinerary] = React.useState([]);

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5000/itinerary/${city}`);
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
              <li className="itinerary_title">{itineraryInfo.title}</li>
              <li className="itineary_rating">
                Puntuación: {itineraryInfo.rating}
              </li>
              <li>
                {
                  <img
                    className="itinerary_picture"
                    src={
                      itineraryInfo.profilePicture
                        ? itineraryInfo.profilePicture
                        : cityStamp
                    }
                    alt={
                      itineraryInfo.profilePicture
                        ? `Imagen de la ciudad de ${itineraryInfo.profilePicture}`
                        : "Imagen por defecto"
                    }
                  />
                }
              </li>
              <li className="itinerary_info">
                <ul>
                  {itineraryInfo.planning.map((dayInfo, dayIndex) => (
                    <li key={dayIndex}>
                      <h2>{dayInfo.title}</h2>
                      <ul>
                        {dayInfo.paragraphs.map((paragraph, paragraphIndex) => (
                          <li key={paragraphIndex}>
                            <p>{paragraph.text}</p>
                            {paragraph.image ? (
                              <img
                                className="itinerary_picture"
                                src={paragraph.image}
                                alt={`imagen de ${city}`}
                              />
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </React.Fragment>
          ))}
        </ul>
      }
    </div>
  );
};

export default Itinerary;
