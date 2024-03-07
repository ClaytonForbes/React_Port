import { useState } from "react"
import { TypeAnimation } from 'react-type-animation';
import data from "../data"

const MySkills = () =>{
const [isExpanded, setExpended] = useState(false)

const toggleExpand = () => {
  setExpended(!isExpanded);
};

return (
  <section className="skills--section" id="mySkills">
    <div className="portfolio--container">
      <p className="section--title">My Skills</p>
      <h2 className="skills--section--heading"> <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I am a Software Developer Currently',
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am a Full Stack Developer',
                3000,
                ' I am also an IT Technicain and Speaialist',
                3000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
              /></h2>
    </div>
    {/* <div className={`skills--section--container${spread ? '--expanded-container' : ''}`} onClick={toggleSpread}>
      <div className="skills--section--card">
        <div className="skills--section--img">
          <img src={data.skills[0].src} alt="Product Chain" />
        </div>
        <div className="skills--section--card--content">
          <h3 className="skills--section--title">{data.skills[0].title}</h3>
          <p className="skills--section--description">{data.skills[0].description}</p>
        </div>
      </div>
    </div> */}
     <button className="toggle-button" onClick={toggleExpand}>
        {isExpanded ? 'Collapse Skills' : 'Expand Skills'}
      </button>
      <div className={`skills--section--expanded-container ${isExpanded ? '' : 'hidden'}`}>
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




export default MySkills