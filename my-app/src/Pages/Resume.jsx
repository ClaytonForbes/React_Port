import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ResumePage = () => {
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual filename of your resume
    const filename = 'resume.pdf';

    // Replace 'https://example.com/resume.pdf' with the actual URL of your resume file
    const resumeUrl = 'https://example.com/resume.pdf';

    // Fetch the resume file
    fetch(resumeUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the resume Blob
        const url = URL.createObjectURL(blob);

        // Create an anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;

        // Simulate a click on the anchor element to trigger the download
        a.click();

        // Release the object URL to free up memory
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
      });
    alert("Downloading resume...");
  };

  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <button onClick={handleDownloadResume}>Download Resume</button>
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
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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
  );
};

export default ResumePage;
