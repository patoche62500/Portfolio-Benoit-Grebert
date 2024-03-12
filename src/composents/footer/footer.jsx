import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>Benoît Grébert</li>
        <li className="title--center">
          <a
            href="https://github.com/patoche62500?tab=repositories"
            target="_blank"
          >
            <img
              src="/assets/images/github.png"
              width={50}
              height={50}
              alt=""
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
