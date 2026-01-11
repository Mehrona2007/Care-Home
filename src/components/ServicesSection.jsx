// ServicesSection.jsx
import React from "react";
import "./ServicesSection.css";

const servicesData = [
  {
    title: "Resident Care",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Vivamus donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
    offerings: [
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
    ],
  },
  {
    title: "Elderly Nutrition",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Vivamus donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
    offerings: [
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
    ],
  },
  {
    title: "Skilled Nursing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Vivamus donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
    offerings: [
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
    ],
  },
  {
    title: "Caring Staff",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet.",
    details:
      "Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Una pulvinar porttitor dignissim congue pellentesque ac hac. Vivamus donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.",
    offerings: [
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
      "Name of the Service Offerings",
    ],
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      {servicesData.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-left">
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <h3>Service Details</h3>
            <p className="service-details">{service.details}</p>
          </div>
          <div className="service-right">
            <h3>Service Offerings</h3>
            <ul>
              {service.offerings.map((offering, idx) => (
                <li key={idx}>{offering}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;