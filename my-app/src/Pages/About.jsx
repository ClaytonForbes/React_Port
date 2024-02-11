 const AboutMe = () => {

    return (
        <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        {/* <img src="../../public/img/about-me.png" alt="About Me"/> */}
        <img src="/img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Greetings! I'm Clayton Forbes, a budding Software Developer with a solid foundation in computer systems and network infrastructure.
        Drawing upon my background in IT, I bring a robust skill set to software development, specializing in crafting intricate solutions and adeptly troubleshooting issues.
        I proudly hold a recent degree from Fanshawe College, where I completed the Computer Programming course (CPA2). 
        This program has equipped me with the latest industry knowledge and honed my coding expertise.  
          </p>
          <p className="hero--section-description">
        I am passionate about the art of coding, 
        I find immense joy in solving problems through elegant and efficient code.
        Eager to expand my skills, I am enthusiastic about collaborating with fellow programmers, 
        contributing to innovative projects, and continually learning and growing in this dynamic field. 
        I look forward to the exciting journey ahead and the opportunity to make meaningful contributions to the world of web development.
          </p>
        </div>
      </div>
    </section>
    )
 }

 export default AboutMe