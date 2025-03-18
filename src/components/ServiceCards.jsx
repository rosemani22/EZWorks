import React from "react";
import "./ServiceCards.css";

const services = [
  { title: "Presentation Design", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." },
  { title: "Audio - Visual Production", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." },
  { title: "Translation Services", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." },
  { title: "Graphic Design", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." },
  { title: "Research & Analytics", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." },
  { title: "Data Processing", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." }
];

const ServiceCards = () => {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <div key={index} className="card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
