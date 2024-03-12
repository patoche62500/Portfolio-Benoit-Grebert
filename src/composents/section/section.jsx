//composents
//style
import "./section.scss";

export default function Section({ id, children, title, data }) {
  return (
    <section id={id} className="container__section">
      <h3 className="title--center">{title}</h3>
      {children}
    </section>
  );
}
