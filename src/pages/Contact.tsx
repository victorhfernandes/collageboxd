import InfoItems from "../components/InfoItems/InfoItems";
import Anchor from "../components/Anchor/Anchor";

const Contact = () => {
  return (
    <div className="contact-containner">
      <InfoItems title="Contact Me">
        If you want to reach me you can find me on{" "}
        <Anchor href="https://github.com/victorhfernandes">GitHub</Anchor>,
        <Anchor href="https://www.linkedin.com/in/victorhfernandes">
          {" "}
          LinkedIn
        </Anchor>
        , <Anchor href="https://letterboxd.com/Victorh8010/">
          Letterboxd
        </Anchor>{" "}
        or just send a email to{" "}
        <Anchor href="mailto:victorh.fernandes.o@gmail.com">
          victorh.fernandes.o@gmail.com
        </Anchor>
        .
      </InfoItems>
      <InfoItems title="Missing Posters">
        If you want to report a poster that is missing you can send me an email
        with the subject “CollageBoxd - Missing Poster” and the names of the
        movies and I will do my best to fix it.
      </InfoItems>
    </div>
  );
};

export default Contact;
