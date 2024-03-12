//composant
import Tag from "../tag/tag";
//style
import "./project.scss";

export default function Project({ content }) {
  return (
    <article className="container__card__project">
      <div className="container__card__project__image">
        <img src="/assets/images/teste.png" alt="" />
      </div>
      <div className="container__card__project__content">
        <h4>{content.title}</h4>
        <p>content.description</p>
        <ul className="container__tags">
          <li>Compétences :</li>
          {content.acquis?.map((e) => (
            <li key={e}>
              <Tag nameTag={e} />
            </li>
          ))}
        </ul>
        <div>
          <a href={content.github} target="_blank">
            <img
              src="/assets/images/github.png"
              width={50}
              height={50}
              alt=""
            />
          </a>
        </div>
      </div>
    </article>
  );
}
