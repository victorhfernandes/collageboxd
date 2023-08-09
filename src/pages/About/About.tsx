import Anchor from "../../components/Anchor/Anchor";
import AboutItems from "../../components/AboutItems/AboutItems";
import "./About.css";

const About = () => {
  return (
    <div className="about-containner">
      <AboutItems title="About Collageboxd">
        I love watching movies and keeping track of it on{" "}
        <Anchor href="https://letterboxd.com/Victorh8010/">
          my Letterboxd
        </Anchor>
        , inspired by projects like{" "}
        <Anchor href="https://receiptify.herokuapp.com/">Receiptify</Anchor> and{" "}
        <Anchor href="https://tapmusic.net/">Tapmusic</Anchor> i decided to make
        this project that creates an image of what you have logged on Letterboxd
        in a month or in a year of your choice.
      </AboutItems>
      <AboutItems title="Small Screens">
        For some reason that I don't know when downloading the collage on small
        screens the rating is stretched, there are two solutions for this:
        <ul>
          <li>
            Download the image without the ratings, selecting the Hide Rating
            option
          </li>
          <li>
            Put or mobile browser in{" "}
            <Anchor href="https://helpdeskgeek.com/how-to/how-to-activate-desktop-mode-in-any-browser-on-android-ios/">
              Desktop Mode
            </Anchor>
          </li>
        </ul>
      </AboutItems>
    </div>
  );
};

export default About;
