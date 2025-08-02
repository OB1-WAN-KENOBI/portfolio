import { ImArrowUpRight } from "react-icons/im";
import ServicesModal from "./ServicesModal";
import { useState } from "react";

const ServicesItem = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <>
      {services.map((item, index) => (
        <li className="services-container" key={index}>
          <div className="service-card" onClick={() => openModal(index)}>
            <item.icon className="services-icon" />
            <h3>{item.title}</h3>
            <div className="learn-more-btn">
              Learn More
              <ImArrowUpRight className="learn-more-icon" />
            </div>
          </div>
          <ServicesModal
            item={item}
            isActive={activeIndex === index}
            closeModal={closeModal}
          />
        </li>
      ))}
    </>
  );
};

export default ServicesItem;
