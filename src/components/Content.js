import React from 'react';

function Content() {
  return (
    <div className="content">
      <section id="about" className="section">
        <h2>About</h2>
        <p>
          Results-driven Full Stack Developer with over 2 years of experience designing and developing scalable web applications. Adept at optimising cross-platform functionality and enhancing user experiences across various devices and browsers. Skilled in creating and deploying RESTful APIs for seamless communication between client-side and server-side systems. Effective team player in Agile environments, collaborating with cross-functional teams to drive project success.
        </p>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item" onClick={() => window.open('https://www.risidio.com', '_blank')}>
          <h3>Frontend Developer Intern - Risidio</h3>
          <p className="date">July 2024 - Present</p>
          <p>
            Develop and deploy responsive user interface components using React, TypeScript, and SCSS for a cutting-edge web application in the entertainment industry. Partner with UX/UI designers to transform high-fidelity mockups into pixel-perfect, functional code.
          </p>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">SCSS</span>
            <span className="tag">UX/UI</span>
          </div>
        </div>
        <div class="experience-item" onclick="window.open('https://www.thehrnation.com', '_blank')">
            <h3>Full Stack Developer - The H.R. Nation Limited</h3>
            <p class="date">August 2021 - August 2023</p>
            <p>
                Contributed to developing scalable software solutions, consistently writing clean, maintainable code for front and back-end systems. Led the design and development of scalable frontend architecture using React, optimising system performance by 30%.
            </p>
            <div class="tags">
                    <span class="tag">React</span>
                    <span class="tag">D3.js</span>
                    <span class="tag">Chart.js</span>
                    <span class="tag">Agile</span>
            </div>
        </div>
        <a href="jinmin-cai-portfolio/Jinmin Cai CV (1).docx" className="view-resume">View Full Resume →</a>
      </section>

      {/* Add Projects, Skills, and Contact sections here */}
      <section id="projects" class="section">
            <h2>Projects</h2>
            <div class="project-item">
                <h3>Skin Cancer Detection System</h3>
                <p>
                    Led the development of a highly accurate skin cancer detection system using Vision Transformer (ViT) technology, achieving 97% accuracy on the ISIC Skin Cancer Challenge 2019. Deployed the system as a web application on Azure.
                </p>
                <div class="tags">
                    <span class="tag">Vision Transformer</span>
                    <span class="tag">Azure</span>
                    <span class="tag">Web Application</span>
                </div>
            </div>
            <div class="project-item">
                <h3>Interactive Market Trends Dashboard</h3>
                <p>
                    Created a dynamic web application to visualise real-time market trends and consumer behaviours. Utilised advanced data visualisation tools like D3.js and Chart.js to design interactive charts and graphs.
                </p>
                <div class="tags">
                    <span class="tag">D3.js</span>
                    <span class="tag">Chart.js</span>
                    <span class="tag">Data Visualization</span>
                </div>
            </div>
            <div class="project-item">
                <h3>Advanced Post Management System</h3>
                <p>
                    Developed a responsive web application integrating React, Redux, and RESTful APIs to fetch and display posts from a public API. Implemented a user-friendly form for adding new posts, ensuring real-time updates and seamless integration with the post list.
                </p>
                <div class="tags">
                    <span class="tag">React</span>
                    <span class="tag">Redux</span>
                    <span class="tag">RESTful APIs</span>
                    <span class="tag">Axios</span>
                </div>
             </div>
         </section>

        <section id="skills" class="section">
            <h2>Technical Proficiencies</h2>
            <div class="tags">
                <span class="tag">HTML5</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">React</span>
                <span class="tag">Vue.js</span>
                <span class="tag">Angular</span>
                <span class="tag">Node.js</span>
                <span class="tag">Java</span>
                <span class="tag">Python</span>
                <span class="tag">C#/.NET</span>
                <span class="tag">SQL</span>
                <span class="tag">AWS</span>
                <span class="tag">Azure</span>
                <span class="tag">Git</span>
                <span class="tag">Jenkins</span>
                <span class="tag">GitLab CI</span>
                <span class="tag">GitHub Actions</span>
            </div>
        </section>

        <section id="contact" class="section">
            <h2>Contact</h2>
            <p>
                I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
            </p>
            <a href="mailto:jimworkcontact@gmail.com">jimworkcontact@gmail.com</a>
        </section>
    </div>
  );
}

export default Content;