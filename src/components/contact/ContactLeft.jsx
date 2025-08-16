import { ContactData } from "../../data/ContactData";

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <h2>Let's discuss your project</h2>
      <ul className="contact-list">
        {ContactData.map((item) => (
          <li key={item.id}>
            <h3>
              <item.icon />
              {item.title}
            </h3>
            <span>
              <a href={item.link}>+00 123-777-9999</a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;
