import Anchor from "../components/Anchor/Anchor";
import InfoItems from "../components/InfoItems/InfoItems";

const About = () => {
  return (
    <div className="about-containner">
      <InfoItems title="About Collageboxd">
        I love watching movies and keeping track of it on my Letterboxd,
        inspired by projects like{" "}
        <Anchor href="https://receiptify.herokuapp.com/">Receiptify</Anchor> and{" "}
        <Anchor href="https://tapmusic.net/">Tapmusic</Anchor> i decided to make
        this project that creates an image of what you have logged on Letterboxd
        in a month or in a year of your choice.
      </InfoItems>
      <InfoItems title="How does Collageboxd work?">
        First you need a Letterboxd account, you will put your username in the
        field, select the period and year, wait until load and finally click on
        the download button. <br />
        If you are a nerd and want to know how it really work the code is right
        here:{" "}
        <Anchor href="https://github.com/victorhfernandes/collageboxd">
          GitHub Repo
        </Anchor>
      </InfoItems>
      <InfoItems title="Why is it taking so long to load? 🫤">
        Everything in this site is upload in a free server so sometimes it can
        be a little slow, here's what you can do about it:
        <ul>
          <li>
            Close the tab and open again, if doesn't work close the browser and
            try again, sometimes it really help
          </li>
          <li>
            If you are using <b>Safari</b> it will be a little slower than other
            browsers because of the way it's built.
          </li>
          <li>
            Also the All Year function generally doesn't work on <b>Safari</b>,
            try another browser.
          </li>
        </ul>
      </InfoItems>
      <InfoItems title="Am I crazy or do the rating stars look weird???">
        Yeah, it's impossible to unsee once you notice, i don’t have no idea why
        this happens in the download image, but you can do this:
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
        If you don’t know what we are talking about just ignore this.
      </InfoItems>
    </div>
  );
};

export default About;
