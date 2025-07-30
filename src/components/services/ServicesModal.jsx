const ServicesModal = () => {
  return (
    <>
      <div className="service-modal">
        <div className="service-modal-body">
          <i className="fa-solid fa-xmark modal-close-btn"></i>
          <h3>Ui/UX Consultancy</h3>
          <h4>What is UX consulting?</h4>
          <p>
            UX consulting helps companies improve their product’s overall
            usability and optimize expenses by implementing the right UX
            processes, methods, and tools.
          </p>
          <h4>What I provide</h4>
          <ul>
            <li>
              <i className="fa-solid fa-circle-check"></i>
              Establish the right UX processes
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>
              Create exceptional user experiences
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>
              Discover new business
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>
              Save resources
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServicesModal;
