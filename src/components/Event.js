import React from "react";
import Birthday from "../images/Birthday_cake.png";

const Event = () => {
  return (
    <section>
      <img src={Birthday} alt="Birthday image" className="image" />
      <ul>
        <li>
          <ul>
            <li>
              <h2>Birthday Bash</h2>
            </li>
            <li>
              <span>Hosted by Elysia</span>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <img></img>
            </li>
            <li>18 August 6:00PM</li>
            <li>to 19 August 1:00PM UTC +10</li>
          </ul>
          <ul>
            <li>
              <img></img>
            </li>
            <li>Street name</li>
            <li>Suburb, State, Postcode</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Event;
