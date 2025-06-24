const Contact = (props) => {
  return (
    <article className="contact-card">
      <div className="contact-image"></div>
      <h3>{props.name}</h3>
      <div className="info-contact">
        <div className="phone-icon image"></div>
        <p>{props.contact}</p>
      </div>
      <div className="info-contact">
        <div className="mail-icon image"></div>
        <p>{props.email}</p>
      </div>
    </article>
  );
};

export default Contact;
