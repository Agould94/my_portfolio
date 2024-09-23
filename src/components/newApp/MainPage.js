import React, {useState, useEffect} from 'react'
import VideoModal from './VideoModal'
import GitHubButton from './GitHubButton';
import {LinkedIn, GitHub, X} from '@mui/icons-material';
import DrawingCanvas from './zen-sandbox';
import NDAModal from './NDAModal';
import ContactForm from './ContactForm';  // Import the ContactForm component
import IntroScreen from './IntroScreen';

function MainPage({data, yinyang, leaf}){
    console.log(data)
    const[isModalOpen, setModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('')
    const [projects, setProjects] = useState(data.projects)
    const [isNdaOpen, setNdaOpen] = useState(false);
    const [isContactOpen, setContactOpen] = useState(false);
    const [isIntroComplete, setIsIntroComplete] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        // Check when the page has fully loaded
        const handlePageLoad = () => {
          setIsPageLoaded(true);
        };
    
        // Add event listener for page load
        window.addEventListener('load', handlePageLoad);
    
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('load', handlePageLoad);
      }, []);

    const handleIntroComplete = () => {
        setIsIntroComplete(true); // Once intro is done, show the main page
      };

    const videos = []
    projects.forEach(element => {
        let video = {}
        video['title'] = element["name"]
        video['id'] = element["video"].split('/')[3]
        video['description'] = element["description"]
        video['github'] = element["github"]
        videos.push(video)

        console.log(video['id'])
    });

    const openModal = (videoId)=>{
        setCurrentVideoId(videoId)
        setModalOpen(true)
    }

    const closeModal =() =>setModalOpen(false);
    const openNda = () => setNdaOpen(true);
    const closeNda = () => setNdaOpen(false);
    const openContactModal = () => setContactOpen(true);  
    const closeContactModal = () => setContactOpen(false);

    return(
        <>
            {!isIntroComplete && <IntroScreen onComplete = {handleIntroComplete} leaf = {leaf}/>}
            {isIntroComplete && (
                <div class = 'mainPage' id = 'mainPage'>
                {/* Contact Button */}
              <button 
                className="contactButton" 
                onClick={openContactModal}
              >
                Contact
              </button>
              {isContactOpen && (
                <div className = "modal-overlay">
                  <div className = "modal-content">
                    <button className = "modal-close-button" onClick={closeContactModal}>Close</button>
                    <ContactForm />  {/* Contact form is rendered inside the modal */}
                  </div>
                </div>
              )}
          <div className = "intro">
          <h1>Welcome to my Website</h1>
          <p className = "text" >I am passionate about building web applications and writing great code.</p>
          <p className = "text">I work with teams and alone to deliver the best possible products.</p>
          <p className = "text">I continue to hone my skills by building projects and learning as much as I can. </p>
          <p className='text'>Follow me here to keep up to date on my work.</p>
          </div>
          <div className = 'projects'>
              <h3>Here are some projects I have built:</h3>
              <div className = "projects-container">
                  <div className = "projects-and-zen">
                      <div className = 'projects'>
                      {videos.map((video) => (
                          <div className = "project-div">
                              <button key={video.id} onClick={() => openModal(video.id)}>
                              {video.title}
                              </button>
                              <small>{video.description}</small>
                              <div className = "gh-div">
                                  <GitHubButton github = {video.github}></GitHubButton>
                              </div>
                          </div>
                      ))}
                      <div className = "project-div">
                          <button onClick = {openNda}>Protected Project - Sign NDA to Watch</button>
                          <small>Overview of the backend API I built in .NET MVC for GuardTrax.</small>
                      </div>
              <VideoModal isOpen={isModalOpen} closeModal={closeModal} videoId={currentVideoId} />
              <NDAModal isOpen = {isNdaOpen} closeModal={closeNda}></NDAModal>
                      </div>
                      <div className = "zen">
                          <DrawingCanvas yinyang = {yinyang}></DrawingCanvas>
                      </div>
                  </div>
                  <h4 className = "text">Projects under development:</h4>
                  <ul>
                      <li>Swift mobile application.</li>
                      <li>FutureMap crowdfunding software.</li>
                      <li>Http server.</li>
                  </ul>
              
              </div>
          </div>
          <div className = "current-work">
              <h3>I Currently Work at GuardTrax</h3>
              <p>A Web and Mobile application for field management of private security teams.</p>
              <p id="includes">It includes</p>
              
              <ul className ='current-work-ul'>
                  <li>Site Mapping <br/>&<br/> Geofencing</li>
                  <li>Live Security Guard Tracking</li>
                  <li>Remote Field Team Management</li>
                  <li>Statistical Reporting<br/>&<br/>Analytics</li>
              </ul>  
              <p id="bm">Built In</p>
              <p id="includes">MSSQL, C#, .NET MVC, & Javascript/React.</p>
              
              
          </div>
          <div className = "footer">
                  <div className = "right-div"><small>Alexander Gould</small><small>alexander.gould94@gmail.com</small></div>
                  <div className = "left-div">
                      <a href = "https://github.com/Agould94"><GitHub></GitHub></a>
                      <a href = "https://www.linkedin.com/in/alexander-gould1/"><LinkedIn/></a>
                      <a href = "https://x.com/Alex_Gould94"><X/></a>
                  </div>
          </div>
                </div>
            )}
        </>
    );
}

export default MainPage