import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [contactInfo, setContactInfo] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    location: "",
    image: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/event");
  };

  return (
    <div className="create_container">
      <form onSubmit={handleSubmit} className="form_container">
        <h2 className="h2">Enter information about Event</h2>
        <div className="input_container">
          <label htmlFor="event_name">
            {" "}
            Event Name
            <input
              className="input"
              value={contactInfo.eventName}
              onChange={handleChange}
              type="text"
              name="eventName"
              required
            />
          </label>
        </div>
        <div className="input_container">
          <label htmlFor="host_name">
            Host Name{" "}
            <input
              className="input"
              value={contactInfo.hostName}
              onChange={handleChange}
              type="text"
              name="hostName"
              required
            />
          </label>
        </div>
        <div className="input_container">
          <label htmlFor="start_time">
            Start Time
            <input
              className="input"
              value={contactInfo.startTime}
              onChange={handleChange}
              type="datetime-local"
              name="startTime"
              required
            />
          </label>
        </div>
        <div className="input_container">
          <label htmlFor="end_time">
            {" "}
            End Time
            <input
              className="input"
              value={contactInfo.endTime}
              onChange={handleChange}
              type="datetime-local"
              name="endTime"
              required
            />{" "}
          </label>
        </div>
        <div className="input_container">
          <label htmlFor="location">
            Event Location{" "}
            <input
              className="input"
              type="text"
              value={contactInfo.location}
              onChange={handleChange}
              name="location"
              required
            />
          </label>
        </div>
        <div className="input_container">
          <label htmlFor="photos">Select a photo:</label>
          <input
            type="file"
            value={contactInfo.image}
            onChange={handleChange}
            id="myfile"
            name="photos"
          />
        </div>

        <div className="event_button_container">
          <button className="button event_button">🎉 Next</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
