import React from "react";


const MainPage = () =>{
    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Clayton</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            A dedicated software developer with a knack for crafting elegant solutions. 
              <br /> My passion lies in transforming complex challenges into streamlined, innovative code. Let's build something extraordinary together.
            </p>
          </div>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    )
    

}


export default MainPage