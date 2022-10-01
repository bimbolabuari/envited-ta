import React, { useState } from "react";
import Birthday from "../images/Birthday_cake.png";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    location: "",
    image: Birthday,
  });

  const handleChange = (event) => {
    setEventInfo({ ...eventInfo, [event.target.name]: event.target.value });
  };

  const handleImageUpload = ({target: {files}}) => {
    setEventInfo({...eventInfo, image: URL.createObjectURL(files[0])})
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log({eventInfo})
    event.preventDefault();
    navigate("/event", {state: {eventInfo}});
  };

  return (
    <div className="create_container">
      <form onSubmit={handleSubmit} className="form_container">
        <h2 className="h2">Enter information about Event</h2>
        <div className="input_container">
          <label htmlFor="event_name">
            {" "}
            Event Name

          </label>
          <input
              className="input"
              value={eventInfo.eventName}
              onChange={handleChange}
              type="text"
              name="eventName"
              required
            />
        </div>
        <div className="input_container">
          <label htmlFor="host_name">
            Host Name{" "}
   
          </label>
          <input
              className="input"
              value={eventInfo.hostName}
              onChange={handleChange}
              type="text"
              name="hostName"
              required
            />
        </div>
        <div className="input_container">
          <label htmlFor="location">
            Event Location{" "}
     
          </label>
          <input
              className="input"
              type="text"
              value={eventInfo.location}
              onChange={handleChange}
              name="location"
              required
            />
        </div>
        <div className="input_container">
          <label htmlFor="start_time">
            Start Time
  
          </label>
          <input
              className="input"
              value={eventInfo.startTime}
              onChange={handleChange}
              type="datetime-local"
              name="startTime"
              required
            />
        </div>
        <div className="input_container">
          <label htmlFor="end_time">
            {" "}
            End Time
  {" "}
          </label>
          <input
              className="input"
              value={eventInfo.endTime}
              onChange={handleChange}
              type="datetime-local"
              name="endTime"
              required
            />
        </div>
   
        <div className="input_container">
          <label htmlFor="photos">Select a photo:</label>
          <input
          className="input"
            type="file"
            onChange={handleImageUpload}
            id="image"
            name="image"
          />
        </div>

        <div className="event_button_container">
          <div className="event_button">
          <button className="button next">🎉 Next</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
