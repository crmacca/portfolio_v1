import { Fade, Slide } from "@mui/material"
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import ParticlesElement from "../../components/Particles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { useNavigate } from "react-router-dom"
import data from "../../components/Data"

function AboutPage(props) {
    const [keyframe, setKeyframe] = React.useState(0)
    const [skippedAnimation, setAnimationSkipped] = React.useState(false);

    const navigate = useNavigate()
    
    React.useEffect(() => {
        setTimeout(() => {
            setKeyframe(1);
        }, 2000)
    
        setTimeout(() => {
            setKeyframe(2)
        }, 3000)

        setTimeout(() => {
            setKeyframe(3)
        }, 5000)

        setTimeout(() => {
            setKeyframe(4)
        }, 8000)

        /*
        setTimeout(() => {
            setKeyframe(5)
        }, 10000)

        setTimeout(() => {
            setKeyframe(6)
        }, 12000)
        */
    }, [])

    return (
        <div className='flex flex-col justify-start items-start m-auto max-w-5xl p-10'>
            <p className={`fixed bottom-0 font-inter font-extralight text-sm p-5 select-none noLightDarkBackground ${props.darkMode ? 'dark' : 'light'}`}>Made with <span style={{fontFamily: 'sans-serif'}}>❤️</span> by Chris with <a className='underline' href='https://reactjs.org'>React</a></p>
            <Fade in={props.particlesEnabled}>
                <div>
                    <ParticlesElement darkMode={props.darkMode} />
                </div>
            </Fade>
            
            <Fade in={!skippedAnimation}>
                <div>
                    <Fade in={keyframe !== 4}>
                        <div>
                            <button onClick={() => {setAnimationSkipped(true);}} className={`px-5 py-1 font-inter mt-5 font-light text-md outline-none border-none fixed bottom-0 left-0 mb-4 ml-4 transition duration-500 hover:translate-y-2 ${props.darkMode ? 'hover:bg-white hover:text-black dark' : 'hover:bg-black hover:text-white light'}`}>skip animation</button>
                        </div>
                    </Fade>
                </div>
            </Fade>
            
            <div className='flex justify-start items-center min-w-full'>
                <img className='rounded-full w-10 min-h-full mr-3 hidden md:block select-none customImage' src='me.png' alt='avatar' />
                <h1 className="font-inter select-none m-0">
                    {!skippedAnimation ? (<>
                    <Typewriter
                    className='select-none'
                    words={['Hey there 👋,']}
                    loop={1}
                    typeSpeed={10}
                    delay={0}
                    deleteSpeed={10}
                    cursor={keyframe === 0}
                    cursorStyle='|' />
                    <br />
                    </>) : 'Hey there 👋,'}
                </h1>
                <button onClick={() => {navigate('/home')}} className={`px-5 py-1 font-inter mt-5 font-light text-md outline-none border-none ml-auto hidden md:block transition duration-500 hover:translate-y-2 ${props.darkMode ? 'hover:bg-white hover:text-black dark' : 'hover:bg-black hover:text-white light'}`}><FontAwesomeIcon icon={icon({name: 'house', style: 'solid'})}/>{' back home'}</button>
            </div>

            <Fade in={keyframe >= 1 || skippedAnimation} mountOnEnter unmountOnExit>
                <h1 className="font-inter select-none font-normal text-xl m-0 mt-3">
                    {!skippedAnimation ? (<>
                    <Typewriter
                    className='select-none'
                    words={['I\'m a 15 year old Software Engineer and hobbyist!']}
                    loop={1}
                    typeSpeed={10}
                    delay={0}
                    deleteSpeed={10}
                    cursor={keyframe === 1}
                    cursorStyle='|' />
                    <br />
                    </>) : 'I\'m a 15 year old software engineer!'}
                </h1>
            </Fade>

            <Fade in={keyframe >= 3 || skippedAnimation} mountOnEnter unmountOnExit>
                <h1 className="font-inter select-none font-semibold text-2xl m-0 mt-8">
                {!skippedAnimation ? (<>
                    <Typewriter
                    className='select-none'
                    words={['Here are some of my projects and groups...']}
                    loop={1}
                    typeSpeed={10}
                    delay={0}
                    deleteSpeed={10}
                    cursor={keyframe === 3}
                    cursorStyle='|' />
                    <br />
                    </>) : 'Here are some of my projects and groups...'}
                </h1>
            </Fade>

            <Slide in={keyframe >= 4 || skippedAnimation} direction={'right'} timeout={1000}>
                <div className='flex justify-start items-center overflow-auto max-w-full gap-5 p-1'>
                    {data.projects.map(group => (
                        <div className='aspect-square min-h-full rounded-2xl overflow-hidden transition duration-300 Box hover:brightness-150 cursor-pointer'>
                            <img style={{height: '100%', width: '100%', maxHeight: '150px'}} className='min-w-full min-h-full groupIconBlur rounded-2xl' src={group.icon} alt={group.name}/>
                        </div>
                    ))}
                    {data.projects.length === 0 && <div>
                        <h1 className='font-inter font-normal text-xl'>There is nothing to see yet, but not for long! 😉</h1>
                    </div>}
                </div>
            </Slide> 
        </div>
    )
}

export default AboutPage