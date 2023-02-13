import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${300}ms ease-in-out`,
    opacity: 0,
  }
  
  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

function DarkLightSwitch(props) {
    const nodeRef = useRef(null);
    const [currentButton, setCurrentButton] = useState(props.darkMode)

    function toggleButton() {
        setCurrentButton(currentButton => !currentButton)
    }

    return (
        <div className='dark:dark fixed top-0 right-0 mr-3 mt-3 text-2xl cursor-pointer transition-opacity duration-50 ease-in-out hover:opacity-60'>
            {currentButton ? <Transition nodeRef={nodeRef} in={props.darkMode} onExited={toggleButton} timeout={duration}>
            {state => (
                <div ref={nodeRef} style={{
                ...defaultStyle,
                ...transitionStyles[state]
                }}>
                <FontAwesomeIcon onClick={() => props.toggleDarkMode()} title='Light Mode' icon={icon({name: 'cloud-moon', style: 'solid'})} />
                </div>
            )}
            </Transition> : <Transition nodeRef={nodeRef} in={!props.darkMode} onExited={toggleButton} timeout={duration}>
            {state => (
                <div ref={nodeRef} style={{
                ...defaultStyle,
                ...transitionStyles[state]
                }}>
                <FontAwesomeIcon onClick={() => props.toggleDarkMode()} title='Dark Mode' icon={icon({name: 'sun', style: 'solid'})} />
                </div>
            )}
            </Transition>}
        </div>
    )
}

export default DarkLightSwitch

