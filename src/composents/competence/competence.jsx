//style
import "./competence.scss";

export default function Competence({ content }) {
  return (
    <article className="container__card__competence">
      <ul className="container__card__competence__globale">
        <li className="container__card__competence__image">
          <img src={content.image} alt="Competence Logo" />
        </li>
        <li className="barre"></li>
        <li className="container__card__competence__content">
          {content.title}
        </li>
      </ul>
    </article>
  );
}
