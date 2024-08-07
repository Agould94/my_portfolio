import React, {useState} from 'react'
import VideoModal from './VideoModal'
import GitHubButton from './GitHubButton';
import {LinkedIn, GitHub, X} from '@mui/icons-material';
import DrawingCanvas from './zen-sandbox';


function MainPage({data}){
    console.log(data)
    const[isModalOpen, setModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('')
    const [projects, setProjects] = useState(data.projects)

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

    return(
        <div class = 'mainPage' id = 'mainPage'>
            <div className = "intro">
            <h1>Welcome to my Website</h1>
            <p className = "text" >I am passionate about building web   applications and writing great code</p>
            <p className = "text">I work with teams and alone to deliver the best possible products.</p>
            <p className = "text">I continue to hone my skills by building projects and learning as much as I can. </p>
            <p className='text'>Follow me here to keep up to date on my work.</p>
            </div>
            <div className = 'projects'>
                <h3>Here are some projects I have built:</h3>
                <div className = "projects-container">
                    <div className = "projects-and-zen">
                        <div>
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
                <VideoModal isOpen={isModalOpen} closeModal={closeModal} videoId={currentVideoId} />
                        </div>
                        <div className = "zen">
                            <DrawingCanvas></DrawingCanvas>
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
                <p>My current work involves rebuilding a legacy .NET application in a modern MVC framework, and technical team management to solve complex problems related to the movement of data in real-time security operations.</p>
                <p>Including:</p>
                <ul>
                    <li>Statistical representation of real-time security tour data.</li>
                    <li>Live location tracking and mapping.</li>
                    <li>ORM development to maximize efficacy and clarity of data.</li>
                    <li>Integrations with Mobile teams.</li>
                    <li>IT and server management.</li>
                </ul>
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
        
    )
}

export default MainPage