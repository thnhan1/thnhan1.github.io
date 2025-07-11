+++
# title = 'About me'
# date = 2025-05-07T23:30:00+08:00
# preface = "Your time is limited, so don't waste it living someone else's life."
# preface_author = "Steve Jobs"
# license = ""
# license_url = ""
preface_author="hidden"
author="hidden"
# draft = false
+++
# About Me

<div class="profile-header">
  <h2>Nhan Tran</h2>
  <p class="tagline">Backend Developer</p>
</div>

## 🛠 Technical Skills

<div class="skills-grid">
  <div class="skill-column">
    <h3>Backend</h3>
    <ul>
      <li>Spring Boot/Cloud</li>
      <li>Nest.js</li>
      <li>RESTful APIs</li>
    </ul>
  </div>

  <div class="skill-column">
    <h3>Frontend</h3>
    <ul>
      <li>React/Next.js</li>
      <li>TypeScript</li>
      <li>Responsive Design</li>
    </ul>
  </div>

  <div class="skill-column">
    <h3>DevOps</h3>
    <ul>
      <li>AWS</li>
      <li>Docker</li>
    </ul>
  </div>

  <div class="skill-column">
    <h3>Database</h3>
    <ul>
      <li>PostgreSQL</li>
      <li>Redis</li>
    </ul>
  </div>
  <div class="skill-column">
    <h3>Security</h3>
    <ul>
      <li>IdP: Keycloak</li>
      <li>OAuth2</li>
    </ul>
  </div>
</div>

## 💼 Experience

**Software Developer**  
_Current_  
- Develop scalable microservices using Spring Cloud  
- Build responsive UIs with React/Next.js  

**Writing and Contributor**  
- Writer in Viblo, SubStack, Personal Blog.
- Open source Contributer. 

## 📫 Contact

<div class="contact-links">
  <a href="https://github.com/thnhan1" target="_blank">
    <img src="https://img.icons8.com/fluent/24/000000/github.png" alt="GitHub"/>
    GitHub
  </a>
  <a href="mailto:huunhantran10@gmail.com">
    <img src="https://img.icons8.com/fluent/24/000000/email.png" alt="Email"/>
    Email
  </a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank">
    <img src="https://img.icons8.com/fluent/24/000000/linkedin.png" alt="LinkedIn"/>
    LinkedIn
  </a>
</div>

<style>
.profile-header {
  margin-bottom: 1.5rem;
}

.tagline {
  color: #666;
  font-style: italic;
  margin-top: -0.8rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.skill-column h3 {
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.skill-column ul {
  list-style-type: none;
  padding: 0;
}

.skill-column li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
}

.skill-column li:before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #3498db;
}

.contact-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.contact-links a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3498db;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-links a:hover {
  transform: translateY(-2px);
  text-decoration: underline;
}
</style>