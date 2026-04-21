import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="contact-small">Get In Touch</p>

        <h2>Let’s Build Something Great Together</h2>

        <p className="contact-text">
          I’m a fresher software developer passionate about building clean,
          user-friendly, and impactful solutions. I’m currently open to
          entry-level opportunities, internships, freelance work, and
          collaborations where I can learn, grow, and contribute my skills in
          web development and programming.
        </p>

        <div className="contact-buttons">
         
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hanoonaedassery@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/hanoona-e/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Hanoonaee"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
