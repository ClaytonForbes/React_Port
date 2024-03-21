import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "react-vertical-timeline-component/style.min.css";

const ResumePage = () => {
    const handleDownloadResume = () => {
        const filename = 'Clayton-Resume.pdf'; // Replace 'Clayton-Resume.pdf' with the actual filename of your resume
        
        // Create a URL for the local resume file
        const resumePath = '/Clayton-Resume.pdf'; // Replace with the actual path to your local resume file
        // this is becasue we made it accessible to all by placing it intot hte public
        
        // Create an anchor element
        const res = document.createElement('a');
        res.href = resumePath;
        res.download = filename;
        
        // Simulate a click on the anchor element to trigger the download
        res.click();
        
        alert("Downloading resume...");
    };

  

    return (
        <div className="resume-page">
          <h1>My Resume</h1>
          <button onClick={handleDownloadResume}>Download Resume</button>
          <div id="timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2024 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              iconClassName="custom-icon" // Add a custom class to the icon
            >
              <h3 className="vertical-timeline-element-title">Software Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Sagacity Software</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </VerticalTimelineElement>

      
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Added contentArrowStyle
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              iconClassName="custom-icon" // Add a custom class to the icon
            >
              <h3 className="vertical-timeline-element-title">IT Specialist/Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Anderson Windows-CO-OP and Part-Time</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </VerticalTimelineElement>
            
            
            {/* Add contentArrowStyle to connect the line */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Added contentArrowStyle
              date="2022"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              iconClassName="custom-icon" // Add a custom class to the icon
            >
              <h3 className="vertical-timeline-element-title">Quality Assurance Analyst</h3>
              <h4 className="vertical-timeline-element-subtitle">CarFax-CO-OP</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </VerticalTimelineElement>
      
            {/* Add contentArrowStyle to connect the line */}
             <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Added contentArrowStyle
              date="2019 - 2021"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}  
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              iconClassName="custom-icon" // Add a custom class to the icon
            >
              <h3 className="vertical-timeline-element-title">Computer Programming Analysis</h3>
              <h4 className="vertical-timeline-element-subtitle">Fanshawe College</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </VerticalTimelineElement> 
      
            {/* Add contentArrowStyle to connect the line */}
             <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} // Added contentArrowStyle
              date="2015 - 2018"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}  
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              iconClassName="custom-icon" // Add a custom class to the icon
            >
              <h3 className="vertical-timeline-element-title">Associate Degree Information Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">BTVI- BAHAMAS Technical Vocational Institute</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </VerticalTimelineElement> 
            
          </VerticalTimeline>
          </div>
        </div>
      );
      
};

export default ResumePage;
