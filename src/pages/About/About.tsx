import Anchor from "../../components/Anchor/Anchor";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-div">
        <span className="about-title">About Collageboxd</span>
        <span className="about-text">
          I love watching movies and keeping track of it on{" "}
          <Anchor
            name=" my Letterboxd"
            href="https://letterboxd.com/Victorh8010/"
          />
          , inspired by projects like{" "}
          <Anchor name="Receiptify" href="https://receiptify.herokuapp.com/" />{" "}
          and <Anchor name="Tapmusic" href="https://tapmusic.net/" /> i decided
          to make this project that creates an image of what you have logged on
          Letterboxd in a month or in a year of your choice.
        </span>
      </div>
      <div className="about-div">
        <span className="about-title">Small Screens</span>
        <span className="about-text">
          For some reason that I don't know when downloading the collage on
          small screens the rating is stretched, there are two solutions for
          this:
          <ul>
            <li>
              Download the image without the ratings, selecting the Hide Rating
              option
            </li>
            <li>
              Put or mobile browser in{" "}
              <Anchor
                name="Desktop Mode"
                href="https://helpdeskgeek.com/how-to/how-to-activate-desktop-mode-in-any-browser-on-android-ios/"
              />
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default About;
