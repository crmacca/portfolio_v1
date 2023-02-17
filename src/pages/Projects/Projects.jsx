import { Fade } from "@mui/material"
import ParticlesElement from "../../components/Particles"

function ProjectsPage(props) {
    return (
        <div className='flex flex-col justify-start items-start m-auto max-w-5xl p-10'>
            <Fade in={props.particlesEnabled}>
                <div>
                    <ParticlesElement />
                </div>
            </Fade>
            <h1>lol</h1>
        </div>
    )
}
export default ProjectsPage