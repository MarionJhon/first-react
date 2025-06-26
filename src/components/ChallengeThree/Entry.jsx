import location from "../../assets/ChallengeThree/location.png";

const Entry = ({ img, title, country, googleMapsLink, dates, text }) => {
  console.log(img);
  return (
    <>
      <article className="journal-entry">
        <div className="image-container">
          <img className="image" src={img.src} alt={img.alt} />
        </div>
        <div className="entry-details">
          <img className="marker" src={location} alt="Marker" />
          <span className="entry-country">{country}</span>
          <a href={googleMapsLink}>View on Google Maps</a>
          <h2 className="entry-name">{title}</h2>
          <p className="entry-date">{dates}</p>
          <p className="entry-description">{text}</p>
        </div>
      </article>
    </>
  );
};

export default Entry;
