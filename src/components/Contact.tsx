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
          <a href="mailto:your.email@example.com" className="contact-button">
            Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-button">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-button">
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">© 2024 Built with React & TypeScript</p>
      </footer>
    </section>
  )
}

export default Contact
