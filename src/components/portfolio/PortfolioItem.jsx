const PortfolioItem = ({ item }) => {
  return (
    <div className="portfolio-img-card">
      <div className="img-card">
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imgSrc} alt={item.title} />
      </div>
    </div>
  );
};

export default PortfolioItem;
