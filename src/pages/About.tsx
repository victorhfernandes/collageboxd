import Anchor from "../components/Anchor/Anchor";
import InfoItems from "../components/InfoItems/InfoItems";

const About = () => {
  return (
    <div className="about-containner">
      <InfoItems title="About Collageboxd">
        I love watching movies and keeping track of it on{" "}
        <Anchor href="https://letterboxd.com/Victorh8010/">
          my Letterboxd
        </Anchor>
        , inspired by projects like{" "}
        <Anchor href="https://receiptify.herokuapp.com/">Receiptify</Anchor> and{" "}
        <Anchor href="https://tapmusic.net/">Tapmusic</Anchor> i decided to make
        this project that creates an image of what you have logged on Letterboxd
        in a month or in a year of your choice.
      </InfoItems>
      <InfoItems title="Small Screens">
        For some reason that I don't know (I’m working on it) when downloading
        the collage on small screens the ratings are stretched, there are two
        solutions for this:
        <ul>
          <li>
            Put your mobile browser in{" "}
            <Anchor href="https://helpdeskgeek.com/how-to/how-to-activate-desktop-mode-in-any-browser-on-android-ios/">
              Desktop Mode
            </Anchor>
            . This will fix everything.
          </li>
          <li>
            If you don't want to do the first you can download the image without
            the ratings, selecting the Hide Rating option.
          </li>
        </ul>
      </InfoItems>
    </div>
  );
};

export default About;
