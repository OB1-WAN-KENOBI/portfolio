import { Swiper, SwiperSlide } from "swiper/react";
import "./Clients.css";
import { clientData } from "../../data/clientData";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import { slideVariants } from "../../utils/animation";

const Clients = () => {
  return (
    <section className="section our-client" id="clients">
      <div className="container flex-center">
        <SectionTitle title="Our Clients" subtitle="Our Clients" />
        <motion.div
          className="our-client-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideVariants("top", 0.7, 70, false)}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="swiper client-swiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="swiper-slide swiper-client-block">
                  <div className="client-img">
                    <img src={client.image} alt={client.name} />
                  </div>
                  <div className="client-details">
                    <p>{client.description}</p>
                    <h3>{client.name}</h3>
                    <span>{client.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
