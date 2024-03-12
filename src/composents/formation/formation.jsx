import "./formation.scss";

export default function Formation({ content }) {
  return (
    <article className="card">
      <div className="card__image">
        <img src={content.image} alt="" />
      </div>
      <div className="card__content">
        <h4>{content.title}</h4>
        <p>{content.description}</p>
      </div>
    </article>
  );
}
