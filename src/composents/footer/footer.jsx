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
              src="/Portfolio-Benoit-Grebert/assets/images/github.webp"
              width={50}
              height={50}
              alt="Logo GitHub"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
