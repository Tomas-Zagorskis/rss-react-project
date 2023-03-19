import classes from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <article className={classes.about}>
      <h1>About Us</h1>
      <div className="content">
        <p>
          We are a team of passionate music lovers who are dedicated to providing our visitors with
          the best possible experience when it comes to discovering and enjoying music. Whether
          you're an avid music fan or simply looking for something new to listen to, we've got you
          covered.
          <br />
          <br />
          Our site is designed to be a hub for music enthusiasts of all genres. From rock to hip
          hop, jazz to classical, we've curated a wide selection of music to suit all tastes. We
          believe that music is a universal language that brings people together, and we strive to
          create a space where all music lovers can feel welcome.
        </p>
      </div>
    </article>
  );
}
