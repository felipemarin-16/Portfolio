import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-description">
          Open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:felipe.marin.1697@gmail.com" className="contact-button">
            Email
          </a>
          <a href="https://www.linkedin.com/in/wilson-marin-107a9017b" target="_blank" rel="noopener noreferrer" className="contact-button">
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">© 2026 Built with React & TypeScript</p>
      </footer>
    </section>
  )
}

export default Contact
