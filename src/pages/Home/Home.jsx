import ParticlesElement from "../../components/Particles"
import { Fade, Slide } from '@mui/material'
import React from 'react'
import './imessage.css'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useNavigate } from "react-router-dom"
import { Tooltip } from 'antd'

function HomePage(props) {
const [currentPage, setPage] = React.useState(0);
const [currentMessage, setCurrentMessage] = React.useState(0);

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

React.useEffect(() => {
    setTimeout(() => {setCurrentMessage(1)}, 500)
    if(window.location.search !== '?showDialog=true') {
        setPage(2)
    }
    

}, [])

const navigate = useNavigate()

return (
    <div>
        <Fade in={currentPage === 0} unmountOnExit mountOnEnter
        timout={1000}
        onExited={() => {
            setTimeout(() => {setPage(2)}, 100)
         }}>
            <div className='min-h-screen min-w-screen overflow-hidden'>
            <button onClick={() => {setPage(1); window.history.replaceState(null, "Chris's Portfolio", "/home")}} className={`px-5 py-1 font-inter mt-5 font-light text-md outline-none border-none fixed bottom-0 left-0 mb-4 ml-4 transition duration-300 hover:translate-y-2 ${props.darkMode ? 'hover:bg-white hover:text-black dark' : 'hover:bg-black hover:text-white light'}`}>skip dialog</button>
            <div className='flex flex-col max-w-screen-sm min-h-screen justify-center items-center m-auto'>
                <Slide in={currentMessage >= 1} direction={'up'} onEntered={() => {setCurrentMessage(2)}} timeout={350}>
                    <div className='ml-auto mr-2'>
                        <div className="message-to dark:message-dark-to select-none font-inter">Hey man!</div>
                        <Fade in={currentMessage >= 2} onEntered={() => {setTimeout(() => {setCurrentMessage(3)}, 1000)}}>
                            <h1 className='text-right m-0 text-xs font-inter font-normal text-gray-400 tracking-wider select-none'>Delivered</h1>
                        </Fade>
                    </div>
                </Slide>

                <Slide in={currentMessage >= 3} direction={'up'} timeout={350}>
                    <div className="message dark:message-dark select-none font-inter mr-auto ml-2">
                        <Fade mountOnEnter unmountOnExit onEntered={() => {setTimeout(() => {setCurrentMessage(4)}, 500)}} onExited={() => setCurrentMessage(5)} in={currentMessage === 3}>
                            <div className="typing mt-1 mb-5">
                                <div className="typing__dot"></div>
                                <div className="typing__dot"></div>
                                <div className="typing__dot"></div>
                            </div>
                        </Fade>
                        <Fade mountOnEnter unmountOnExit onEntered={() => {setTimeout(() => {setCurrentMessage(6)}, 1500)}} in={currentMessage >= 5}>
                            <p className='m-0 text-left font-inter'>Hey man, whats up?</p>
                        </Fade>
                    </div>
                </Slide>

                <Slide in={currentMessage >= 6} direction={'up'} onEntered={() => {setCurrentMessage(7)}} timeout={350}>
                    <div className='ml-auto mr-2'>
                        <div className="message-to dark:message-dark-to select-none font-inter">Do you know Chris?</div>
                        <Fade in={currentMessage >= 7} onEntered={() => {setTimeout(() => {setCurrentMessage(8)}, 1500)}}>
                            <h1 className='text-right m-0 text-xs font-inter font-normal text-gray-400 tracking-wider select-none'>Delivered</h1>
                        </Fade>
                    </div>
                </Slide>

                <Slide in={currentMessage >= 8} direction={'up'} timeout={350}>
                    <div className="message dark:message-dark select-none font-inter mr-auto ml-2">
                        <Fade mountOnEnter unmountOnExit onEntered={() => {setTimeout(() => {setCurrentMessage(9)}, 500)}} onExited={() => setCurrentMessage(10)} in={currentMessage === 8}>
                            <div className="typing mt-1 mb-5">
                                <div className="typing__dot"></div>
                                <div className="typing__dot"></div>
                                <div className="typing__dot"></div>
                            </div>
                        </Fade>
                        <Fade mountOnEnter unmountOnExit onEntered={() => {setTimeout(() => {setCurrentMessage(11)}, 1000)}} in={currentMessage >= 10}>
                            <p className='m-0 text-left  font-inter'>No, whose Chris?!</p>
                        </Fade>
                    </div>
                </Slide>

                <Slide in={currentMessage >= 11} direction={'up'} onEntered={() => {setCurrentMessage(12)}} timeout={350}>
                    <div className='ml-auto mr-2'>
                        <div className="message-to dark:message-dark-to select-none font-inter">Let me show you!</div>
                        <Fade in={currentMessage >= 12} onEntered={() => {setTimeout(() => {setPage(1); window.history.replaceState(null, "Chris's Portfolio", "/home")}, 1500)}}>
                            <h1 className='text-right m-0 text-xs font-inter font-normal text-gray-400 tracking-wider select-none'><span className='font-semibold'>Read</span>{' '+formatAMPM(new Date())}</h1>
                        </Fade>
                    </div>
                </Slide>
            </div>
            </div>
        </Fade>
        <Fade in={currentPage === 2} unmountOnExit mountOnEnter timeout={1000}>
            <div className='min-h-screen max-w-2xl m-auto'>
                <Fade in={props.particlesEnabled} unmountOnExit mountOnEnter>
                    <div>
                        <ParticlesElement darkMode={props.darkMode}/>
                    </div>
                </Fade>
                <p className={`fixed bottom-0 font-inter font-extralight text-sm p-5 select-none noLightDarkBackground ${props.darkMode ? 'dark' : 'light'}`}>Made with <span style={{fontFamily: 'sans-serif'}}>❤️</span> by Chris with <a className='underline' href='https://reactjs.org'>React</a></p>

                <div className='text-left min-h-screen min-w-full mx-4 flex flex-col items-center justify-center'>
                    <div className='min-w-full'>
                        <div className='flex justify-start items-center'>
                        <img className='rounded-full w-10 min-h-full mr-3 hidden md:block select-none customImage' src='me.png' alt='avatar' />
                        <h1 className={`font-inter text-4xl font-semibold m-0 ${props.darkMode ? 'dark' : 'light'} select-none`}>Hey <span className={`m-0 text-4xl font-semibold font-sans noLightDarkBackground ${props.darkMode ? 'dark' : 'light'}`}>👋</span>, I'm 
                        <Typewriter
                                className='select-none'
                                words={[' Tozzleboy.', ' Chris!']}
                                loop={1}
                                typeSpeed={100}
                                deleteSpeed={50}
                                delay={500}
                                cursorStyle='_' />
                        
                        </h1>
                        </div>
                        <h1 className={`font-inter text-2xl font-normal m-0 mt-3 select-none ${props.darkMode ? 'dark' : 'light'}`}>
                            {'I\'m a'}
                            <span className='font-code font-semibold select-none'>
                                <Typewriter
                                words={[' Full Stack Developer.', ' 3D Modeler.', ' Discord Bot Developer.', ' Graphic Designer.', ' Programmer.', ' Network Enthusiast.', 'n \'Av-geek\'.']}
                                loop={0}
                                typeSpeed={30}
                                deleteSpeed={10}
                                delay={500}
                                cursor
                                cursorStyle='_' />
                            </span>
                        </h1>
                        <div className={`flex justify-start items-center mt-2 py-3 noLightDarkBackground ${props.darkMode ? 'dark' : 'light'} gap-5`}>
                            <Tooltip title='Discord Profile | Tozzleboy#0001'>
                                <FontAwesomeIcon onClick={() => {window.open('https://discord.com/users/351189462891626496')}} className='cursor-pointer transition ease-in-out duration-500 hover:opacity-70 text-3xl' icon={icon({name: 'discord', style: 'brands'})} />
                            </Tooltip>
                            <Tooltip title='Github Page'>
                                <FontAwesomeIcon onClick={() => {window.open('https://github.com/crmacca')}} className='cursor-pointer transition ease-in-out duration-500 hover:opacity-70 text-3xl' icon={icon({name: 'github', style: 'brands'})} />
                            </Tooltip>
                            <Tooltip title='Twitter Page'>
                                <FontAwesomeIcon onClick={() => {window.open('https://twitter.com/Tozzleboy')}} className='cursor-pointer transition ease-in-out duration-500 hover:opacity-70 text-3xl' icon={icon({name: 'twitter', style: 'brands'})} />
                            </Tooltip>
                            <Tooltip title='Buy Me A Coffee'>
                                <FontAwesomeIcon onClick={() => {window.open('https://www.buymeacoffee.com/cmcdev')}} className='cursor-pointer transition ease-in-out duration-500 hover:opacity-70 text-3xl' icon={icon({name: 'coffee', style: 'solid'})} />
                            </Tooltip>
                            <Tooltip title='My Portfolio'>
                                <FontAwesomeIcon onClick={() => navigate('/about')} className='cursor-pointer transition ease-in-out duration-500 hover:opacity-70 text-3xl' icon={icon({name: 'briefcase', style: 'solid'})} />
                            </Tooltip>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    </div>
    )
}
export default HomePage
