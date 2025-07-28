import "./SectionTitle.css";

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="inner-title">{title}</h2>
      <h3 className="inner-second-title">{subtitle}</h3>
    </div>
  );
};

export default SectionTitle;
