import './Education.css'

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title">Education</h2>
      <div className="education-content">
        <div className="education-card">
          <img
            src="https://brand.utah.edu/_images/opengraph/default_og.jpg"
            alt="University of Utah"
            className="university-logo"
          />
          <div className="education-details">
            <h3 className="degree">Bachelor of Science in Computer Science</h3>
            <p className="university">University of Utah</p>
            <p className="education-year">Expected Graduation: December 2026</p>
            <p className="education-description">
              Minor in Management • Dean's List (Fall 2025)
            </p>
            <p className="education-description">
              Focus: Machine Learning, Artificial Intelligence, Algorithms, Web Development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
