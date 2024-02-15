import Image from "next/image";
import LOGO from "../app/assets/images/nootan-logo.jpg";

export default function Home() {
  return (
    <div>
      <section className="hero-section-container">
        <div className="profile-container">
          <Image
            className="profile-photo"
            src={LOGO}
            alt=""
            width={300}
            height={300}
          />
          <h1 className="name-heading">Helllo, I am NOOTAN LODHI,</h1>
          <h1 className="name-heading">Software Engineer</h1>
          <div className="name-para-wrapper">
            <p className="name-para">
              Experienced React/Next JS Developer with +2 years creating
              seamless interfaces, integrating frontend with backend,
              implementing tests, and optimizing for top performance in
              JavaScript, TypeScript, and React. Specialized in high-performing
              web apps.
            </p>
          </div>
        </div>
      </section>
      <section className="skills-section">
        <h2 className="skills-title">REACT JS</h2>
        <h2 className="skills-title">Next JS</h2>
        <h2 className="skills-title">REDUX</h2>
        <h2 className="skills-title">JAVACRIPT</h2>
        <h2 className="skills-title">TYPESCRIPT</h2>
        <h2 className="skills-title">HTML</h2>
        <h2 className="skills-title">CSS</h2>
        <h2 className="skills-title">WEBRTC</h2>
        <h2 className="skills-title">WEBSOCKET</h2>
      </section>
    </div>
  );
}
