import React, { useState, useEffect } from 'react';


const MainPage = () =>{
  const words = ["Software", "Front-end", "Full-Stack", "IT"];
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let intervalId;

    const typeNextLetter = () => {
      const currentWord = words[currentIndex];
      let currentTypedText;

      if (isDeleting) {
        currentTypedText = currentWord.substring(0, typedText.length - 1);
      } else {
        currentTypedText = currentWord.substring(0, typedText.length + 1);
      }

      setTypedText(currentTypedText);

      if (isDeleting && currentTypedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      if (!isDeleting && currentTypedText === currentWord) {
        setIsDeleting(true);
        setTimeout(() => {
          setTypedText('');
        }, 100); // Adjust the delay before deleting
      }
    };

    intervalId = setInterval(typeNextLetter, 1000);

    return () => clearInterval(intervalId);
  }, [typedText, currentIndex, isDeleting, words]);

    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Clayton</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">{typedText}</span>{" "}
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
        <img className="hero-image" src="./img/image0.png" alt="Hero Section" />
        </div>
      </section>
    )
    

}


export default MainPage