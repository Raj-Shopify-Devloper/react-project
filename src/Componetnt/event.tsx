import React from "react";
import first_image from "../assets/first-image.avif";
import secound_image from "../assets/secound-image.avif";
import third_image from "../assets/third-image.avif";
import squre from "../assets/squre.png";

const First_image = first_image;
const Secound_image = secound_image;
const Third_image = third_image;

const eventsData = [
  {
    image: First_image,
    type: "Paid",
    title: "Loachella, NYC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: Secound_image,
    type: "Free",
    title: "Rock In Rio, Upstate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: Third_image,
    type: "Exclusive",
    title: "Lollapalooza, Manhattan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Events() {
  return (
    <>
      <div className="image-bg">
        <img className="squre-first" src={squre} />
        <img className="squre-secound" src={squre} />
        <img className="squre-third" src={squre} />
        <img className="squre-four" src={squre} />
      </div>
      <div className="container">
        <div className="event-section">
          <div className="section-heading">
            <h2>Popular Events</h2>
            <p>
              Here are some of the most popular events in New York City curated
              by professionals.
            </p>
          </div>
          <div className="event-item">
            {eventsData.map((event, index) => (
              <div className="event-content" key={index}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-text">
                  <h4>{event.type}</h4>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-button">
                    <a href="#">See Event Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
