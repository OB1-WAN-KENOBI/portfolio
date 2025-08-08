import { Swiper, SwiperSlide } from "swiper/react";
import "./Clients.css";
import { clientData } from "../../data/clientData";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../SectionTitle/SectionTitle";

const Clients = () => {
  return (
    <section className="section our-client">
      <div className="container flex-center">
        <h2 className="inner-title">Our Clients</h2>
        <h3 className="inner-second-title">Our Clients</h3>
        <div className="our-client-wrapper">
          <div className="swiper client-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-client-block">
                <div className="client-img">
                  <img src="./img/client1.webp" alt="client1" />
                </div>
                <div className="client-details">
                  <p>
                    Hi, I’m Aria Collins and I am designer & developer who dream
                    making the world better place by products. I am also very
                    active for international clients.
                  </p>
                  <h3>Aria Collins</h3>
                  <span>Marketing Manager</span>
                </div>
              </div>
              <div className="swiper-slide swiper-client-block">
                <div className="client-img">
                  <img src="./img/client2.webp" alt="client1" />
                </div>
                <div className="client-details">
                  <p>
                    Hi, I’m Aria Collins and I am designer & developer who dream
                    making the world better place by products. I am also very
                    active for international clients.
                  </p>
                  <h3>Cillian Metcalfe</h3>
                  <span>Graphic Designer</span>
                </div>
              </div>
              <div className="swiper-slide swiper-client-block">
                <div className="client-img">
                  <img src="./img/client3.webp" alt="client3" />
                </div>
                <div className="client-details">
                  <p>
                    Hi, I’m Aria Collins and I am designer & developer who dream
                    making the world better place by products. I am also very
                    active for international clients.
                  </p>
                  <h3>Kianna Baird</h3>
                  <span>App Developer</span>
                </div>
              </div>
            </div>
            <div className="swiper-button-next">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
